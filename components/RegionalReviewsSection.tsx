import React from 'react';

interface ReviewItem {
  id: string;
  name: string;
  title: string;
  school: string;
  rating: number;
  comment: string;
  achievement: string;
}

interface RegionalReviewsSectionProps {
  region: 'uk' | 'us' | 'ae';
  accentColor: 'blue' | 'red' | 'green';
}

export const RegionalReviewsSection: React.FC<RegionalReviewsSectionProps> = ({ region, accentColor }) => {
  const colorMap = {
    'blue': {
      bg: 'from-blue-50 to-blue-100',
      badge: 'bg-blue-100 text-blue-700',
      text: 'text-blue-600',
      accent: 'border-blue-600 text-blue-600'
    },
    'red': {
      bg: 'from-red-50 to-red-100',
      badge: 'bg-red-100 text-red-700',
      text: 'text-red-600',
      accent: 'border-red-600 text-red-600'
    },
    'green': {
      bg: 'from-green-50 to-green-100',
      badge: 'bg-green-100 text-green-700',
      text: 'text-green-600',
      accent: 'border-green-600 text-green-600'
    }
  };

  const regionReviews: Record<string, ReviewItem[]> = {
    'uk': [
      {
        id: '1',
        name: 'Sophie Anderson',
        title: 'GCSE Student',
        school: 'Brighton Grammar School',
        rating: 5,
        comment: 'Sir Zubair Ahmad helped me improve from a grade 5 to grade 8 in GCSE Mathematics within just 3 months. His teaching methods are clear and he breaks down complex concepts into digestible pieces.',
        achievement: 'Improved 3 grades (5→8)'
      },
      {
        id: '2',
        name: 'James Mitchell',
        title: 'A Level Student',
        school: 'Westminster School',
        rating: 5,
        comment: 'The best tutor I\'ve had. Sir Zubair Ahmad\'s A Level Physics tutoring made me confident going into my final exams. He covers concepts thoroughly and answers every question patiently.',
        achievement: 'Scored A* (98/100)'
      },
      {
        id: '3',
        name: 'Emma Watson',
        title: 'IGCSE Student',
        school: 'Harrow School',
        rating: 5,
        comment: 'I was struggling with Chemistry, but Sir Zubair Ahmed made it so much easier to understand. His lab explanations were incredibly helpful and I passed with flying colors.',
        achievement: 'Passed with Distinction'
      },
      {
        id: '4',
        name: 'Oliver Sterling',
        title: 'Cambridge IGCSE Student',
        school: 'Tiffin School',
        rating: 5,
        comment: 'Exceptional tutor. Sir Zubair Ahmad\'s personalized approach and attention to detail made all the difference. Highly recommend for anyone serious about their academics.',
        achievement: 'Top 5% in Cambridge Board'
      }
    ],
    'us': [
      {
        id: '1',
        name: 'Sophia Martinez',
        title: 'SAT Student',
        school: 'Stuyvesant High School',
        rating: 5,
        comment: 'Sir Zubair Ahmad\'s SAT prep was game-changing. He identified exactly where I was losing points and gave me targeted strategies. Improved my score by 350 points!',
        achievement: 'SAT Score: 1510/1600'
      },
      {
        id: '2',
        name: 'Aiden Chen',
        title: 'AP Student',
        school: 'Thomas Jefferson High School',
        rating: 5,
        comment: 'Taking AP Physics with Sir Zubair Ahmad is the best decision I made. His problem-solving techniques and in-depth explanations helped me ace the exam.',
        achievement: 'AP Score: 5/5'
      },
      {
        id: '3',
        name: 'Isabella Thompson',
        title: 'SAT & AP Student',
        school: 'Boston Latin School',
        rating: 5,
        comment: 'Sir Zubair Ahmad is incredibly knowledgeable and very responsive. He helped me not just improve my grades but understand the subjects deeply. Best investment in my education.',
        achievement: 'Multiple AP 5s'
      },
      {
        id: '4',
        name: 'Marcus Johnson',
        title: 'AP Bio Student',
        school: 'Bronx Science',
        rating: 5,
        comment: 'As a busy student, I needed flexible tutoring. Sir Zubair Ahmad adapted perfectly to my schedule and kept me on track. His preparation strategies are top-notch.',
        achievement: 'College Acceptance'
      }
    ],
    'ae': [
      {
        id: '1',
        name: 'Amira Al-Mansouri',
        title: 'IB Student',
        school: 'Dubai International School',
        rating: 5,
        comment: 'Sir Zubair Ahmad is an exceptional IB tutor in Dubai. His expertise in Math HL and Physics HL helped me achieve a 42/45 in my final IB exams. Highly professional.',
        achievement: 'IB Score: 42/45'
      },
      {
        id: '2',
        name: 'Khalid Al-Mulla',
        title: 'IGCSE Student',
        school: 'Al Safa Private School',
        rating: 5,
        comment: 'Living in Dubai, finding the right IGCSE tutor was challenging until I found Sir Zubair Ahmad. His online classes are structured and very effective for exam preparation.',
        achievement: 'All A* Grades'
      },
      {
        id: '3',
        name: 'Layla Al-Kaabi',
        title: 'IB Student',
        school: 'Emirates International School',
        rating: 5,
        comment: 'Sir Zubair Ahmad\'s understanding of the IB curriculum is outstanding. He helped me with Extended Essay and TOK while maintaining my regular subjects. Truly dedicated.',
        achievement: 'Excellent University Placement'
      },
      {
        id: '4',
        name: 'Rashid Al-Zaabi',
        title: 'Physics Enthusiast',
        school: 'GEMS World Academy',
        rating: 5,
        comment: 'The best physics tutor in the UAE. Sir Zubair Ahmad makes complex concepts simple and interesting. His preparation strategies for IGCSE and IB are proven winners.',
        achievement: 'Consistent A+ Grades'
      }
    ]
  };

  const reviews = regionReviews[region] || [];
  const colors = colorMap[accentColor];

  return (
    <section className={`py-20 bg-gradient-to-br ${colors.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why Students Choose Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Hear from real students how Sir Zubair Ahmad's tutoring transformed their academic results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-slate-100"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-700 font-medium leading-relaxed mb-6 italic">"{review.comment}"</p>

              {/* Achievement Badge */}
              <div className={`inline-block ${colors.badge} px-4 py-2 rounded-lg mb-6 text-sm font-bold`}>
                {review.achievement}
              </div>

              {/* Student Info */}
              <div className="border-t border-slate-100 pt-6">
                <p className="font-black text-slate-900 text-lg">{review.name}</p>
                <p className="text-slate-600 font-semibold text-sm">{review.title} • {review.school}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className={`text-5xl font-black ${colors.text} mb-2`}>500+</div>
            <p className="text-slate-600 font-semibold">Students Tutored</p>
          </div>
          <div className="text-center">
            <div className={`text-5xl font-black ${colors.text} mb-2`}>4.9/5</div>
            <p className="text-slate-600 font-semibold">Average Rating</p>
          </div>
          <div className="text-center">
            <div className={`text-5xl font-black ${colors.text} mb-2`}>10+</div>
            <p className="text-slate-600 font-semibold">Years Experience</p>
          </div>
          <div className="text-center">
            <div className={`text-5xl font-black ${colors.text} mb-2`}>95%</div>
            <p className="text-slate-600 font-semibold">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalReviewsSection;
