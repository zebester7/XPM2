
import React, { useState } from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { User, Review } from '../types';

interface ReviewsPageProps {
  user: User | null;
  reviews: Review[];
  onAddReview: (r: Review) => void;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ user, reviews, onAddReview }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;

    onAddReview({
      id: 'r-' + Date.now(),
      userId: user.id,
      userName: user.name,
      rating: rating,
      comment: comment,
      timestamp: Date.now(),
    });

    setComment('');
    setRating(5);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Student Feedback</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">See how we've helped students around the world achieve their academic goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Leave a Review</h3>
            {user ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
                          rating >= star ? 'bg-amber-100 text-amber-600' : 'bg-slate-50 text-slate-300'
                        }`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Feedback</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    placeholder="Share your experience..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <p className="text-slate-500 mb-6">Please log in to share your feedback.</p>
                <Link to="/login" className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition">Log In</Link>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {review.userName[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">{review.userName}</h4>
                    <p className="text-xs text-slate-400">{new Date(review.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic">"{review.comment}"</p>
              <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 -z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
