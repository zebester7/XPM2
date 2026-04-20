import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Topic {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  author: string;
  date: string;
  content: string;
  category: string;
}

const AdminPanel: React.FC = () => {
  // Color palette
  const colors = {
    darkNavy: '#0f1f2e',
    navy: '#1a2d4a',
    gold: '#d4af37',
    ivory: '#f5f3ef',
    white: '#ffffff',
    error: '#e74c3c',
    success: '#27ae60'
  };

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetPhone, setResetPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetStep, setResetStep] = useState(1);
  const [message, setMessage] = useState('');

  // Default credentials
  const DEFAULT_EMAIL = 'mishalrazaq665@gmail.com';
  const DEFAULT_PASSWORD = '12345678';

  // Topics state
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: '1',
      title: 'Life is a Test',
      subtitle: 'The Deeper Meaning',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
      description: 'Understanding life challenges through Islamic philosophy',
      author: 'Prof. Mishal Razzaq',
      date: '2026-04-15',
      content: 'Life tests shape our character and spirituality. Learn how to embrace challenges with patience and faith.',
      category: 'Islamic Philosophy'
    },
    {
      id: '2',
      title: 'How Habits Are Formed',
      subtitle: 'Neuroscience & Islam',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'The neuroscience behind habit formation aligned with Islamic principles',
      author: 'Prof. Mishal Razzaq',
      date: '2026-04-14',
      content: 'Discover the brain mechanisms behind habit formation and how Islamic practices rewire our neural pathways.',
      category: 'Neuroscience'
    },
    {
      id: '3',
      title: 'Understanding Emotions',
      subtitle: 'Through Deen',
      image: 'https://images.unsplash.com/photo-1507794778202-cad84cf45f1d?w=600&h=400&fit=crop',
      description: 'Islamic approach to emotional intelligence and wellness',
      author: 'Prof. Mishal Razzaq',
      date: '2026-04-13',
      content: 'Emotions are gifts from Allah. Learn to understand and regulate them through Islamic wisdom.',
      category: 'Psychology'
    }
  ]);

  const [showTopicForm, setShowTopicForm] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [formData, setFormData] = useState<Topic>({
    id: '',
    title: '',
    subtitle: '',
    image: '',
    description: '',
    author: 'Prof. Mishal Razzaq',
    date: new Date().toISOString().split('T')[0],
    content: '',
    category: 'Islamic Philosophy'
  });

  // Login handlers
  const handleLogin = () => {
    if (loginEmail === DEFAULT_EMAIL && loginPassword === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      setMessage('Login successful!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Invalid email or password');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Password reset handlers
  const handleResetPassword = () => {
    if (resetStep === 1) {
      if (resetEmail === DEFAULT_EMAIL) {
        setResetStep(2);
        setMessage('Email verified. Please enter the verification code sent to your phone.');
      } else {
        setMessage('Email not found');
        setTimeout(() => setMessage(''), 3000);
      }
    } else if (resetStep === 2) {
      // In a real app, you'd verify the phone code
      if (resetPhone.length === 6) {
        setResetStep(3);
        setMessage('Phone verified. Please set your new password.');
      } else {
        setMessage('Invalid verification code');
        setTimeout(() => setMessage(''), 3000);
      }
    } else if (resetStep === 3) {
      if (newPassword.length >= 8) {
        // Update password
        setMessage('Password reset successful! You can now login with your new password.');
        setShowResetPassword(false);
        setResetStep(1);
        setResetEmail('');
        setResetPhone('');
        setNewPassword('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Password must be at least 8 characters');
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  // Topic handlers
  const handleAddTopic = () => {
    setEditingTopic(null);
    setFormData({
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      image: '',
      description: '',
      author: 'Prof. Mishal Razzaq',
      date: new Date().toISOString().split('T')[0],
      content: '',
      category: 'Islamic Philosophy'
    });
    setShowTopicForm(true);
  };

  const handleEditTopic = (topic: Topic) => {
    setEditingTopic(topic);
    setFormData(topic);
    setShowTopicForm(true);
  };

  const handleSaveTopic = () => {
    if (!formData.title || !formData.subtitle || !formData.image || !formData.content) {
      setMessage('Please fill in all required fields');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (editingTopic) {
      setTopics(topics.map(t => t.id === editingTopic.id ? formData : t));
      setMessage('Topic updated successfully');
    } else {
      setTopics([...topics, formData]);
      setMessage('Topic added successfully');
    }
    
    setTimeout(() => setMessage(''), 3000);
    setShowTopicForm(false);
  };

  const handleDeleteTopic = (id: string) => {
    if (confirm('Are you sure you want to delete this topic?')) {
      setTopics(topics.filter(t => t.id !== id));
      setMessage('Topic deleted successfully');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: colors.darkNavy }}>
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: colors.white }}
          >
            <h1 className="text-3xl font-black mb-8 text-center" style={{ color: colors.darkNavy }}>
              Admin Panel
            </h1>

            {!showResetPassword ? (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold, color: colors.darkNavy }}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold, color: colors.darkNavy }}
                    placeholder="Enter your password"
                  />
                </div>

                {message && (
                  <div 
                    className="mb-4 p-3 rounded-lg text-white text-center font-bold"
                    style={{ backgroundColor: message.includes('Invalid') || message.includes('not found') ? colors.error : colors.success }}
                  >
                    {message}
                  </div>
                )}

                <button
                  onClick={handleLogin}
                  className="w-full px-6 py-3 font-bold rounded-lg transition hover:opacity-90 text-white mb-4"
                  style={{ backgroundColor: colors.gold, color: colors.darkNavy }}
                >
                  Login
                </button>

                <button
                  onClick={() => setShowResetPassword(true)}
                  className="w-full text-center text-sm font-bold hover:underline"
                  style={{ color: colors.gold }}
                >
                  Forgot Password?
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.darkNavy }}>
                  Reset Password
                </h2>

                {resetStep === 1 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                        Email
                      </label>
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: colors.gold, color: colors.darkNavy }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </>
                )}

                {resetStep === 2 && (
                  <>
                    <p className="mb-4 text-sm" style={{ color: colors.darkNavy }}>
                      Enter the 6-digit code sent to your registered phone number
                    </p>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                        Verification Code
                      </label>
                      <input
                        type="text"
                        value={resetPhone}
                        onChange={(e) => setResetPhone(e.target.value.slice(0, 6))}
                        maxLength={6}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none text-center text-2xl tracking-widest"
                        style={{ borderColor: colors.gold, color: colors.darkNavy }}
                        placeholder="000000"
                      />
                    </div>
                  </>
                )}

                {resetStep === 3 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: colors.gold, color: colors.darkNavy }}
                        placeholder="Enter new password (min 8 characters)"
                      />
                    </div>
                  </>
                )}

                {message && (
                  <div 
                    className="mb-4 p-3 rounded-lg text-white text-center font-bold"
                    style={{ backgroundColor: message.includes('Invalid') || message.includes('must') ? colors.error : colors.success }}
                  >
                    {message}
                  </div>
                )}

                <button
                  onClick={handleResetPassword}
                  className="w-full px-6 py-3 font-bold rounded-lg transition hover:opacity-90 text-white mb-4"
                  style={{ backgroundColor: colors.gold, color: colors.darkNavy }}
                >
                  {resetStep === 1 ? 'Verify Email' : resetStep === 2 ? 'Verify Code' : 'Reset Password'}
                </button>

                <button
                  onClick={() => {
                    setShowResetPassword(false);
                    setResetStep(1);
                    setResetEmail('');
                    setResetPhone('');
                    setNewPassword('');
                    setMessage('');
                  }}
                  className="w-full text-center text-sm font-bold hover:underline"
                  style={{ color: colors.gold }}
                >
                  Back to Login
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen px-4 py-8" style={{ backgroundColor: colors.ivory }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black" style={{ color: colors.darkNavy }}>
            Topic Management
          </h1>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setLoginEmail('');
              setLoginPassword('');
              setMessage('');
            }}
            className="px-6 py-2 font-bold rounded-lg transition hover:opacity-90 text-white"
            style={{ backgroundColor: colors.error }}
          >
            Logout
          </button>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 rounded-lg text-white font-bold"
            style={{ backgroundColor: message.includes('success') ? colors.success : colors.error }}
          >
            {message}
          </motion.div>
        )}

        {/* Add Topic Button */}
        <button
          onClick={handleAddTopic}
          className="mb-8 px-6 py-3 font-bold rounded-lg transition hover:opacity-90 text-white"
          style={{ backgroundColor: colors.navy }}
        >
          + Add New Topic
        </button>

        {/* Topic Form Modal */}
        {showTopicForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            >
              <h2 className="text-3xl font-black mb-6" style={{ color: colors.darkNavy }}>
                {editingTopic ? 'Edit Topic' : 'Add New Topic'}
              </h2>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                    placeholder="Topic title"
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Subtitle *
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                    placeholder="Brief subtitle"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                  >
                    <option>Islamic Philosophy</option>
                    <option>Neuroscience</option>
                    <option>Psychology</option>
                    <option>Islamic Teachings</option>
                    <option>Mental Health</option>
                  </select>
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Image URL (YouTube Thumbnail Size: 1280x720) *
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.image && (
                    <div className="mt-3 rounded-lg overflow-hidden border-2" style={{ borderColor: colors.gold }}>
                      <img src={formData.image} alt="preview" className="w-full h-40 object-cover" />
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Description *
                  </label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                    placeholder="Brief description"
                  />
                </div>

                {/* Blog Content */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Blog Content *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none resize-none"
                    style={{ borderColor: colors.gold }}
                    rows={8}
                    placeholder="Write your blog content here..."
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.darkNavy }}>
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: colors.gold }}
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handleSaveTopic}
                    className="flex-1 px-6 py-3 font-bold rounded-lg transition hover:opacity-90 text-white"
                    style={{ backgroundColor: colors.navy }}
                  >
                    Save Topic
                  </button>
                  <button
                    onClick={() => setShowTopicForm(false)}
                    className="flex-1 px-6 py-3 font-bold rounded-lg transition border-2"
                    style={{ borderColor: colors.gold, color: colors.darkNavy }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundColor: colors.white }}
            >
              {/* Image */}
              <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-black" style={{ color: colors.darkNavy }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm font-bold" style={{ color: colors.gold }}>
                      {topic.subtitle}
                    </p>
                  </div>
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: colors.navy, color: colors.gold }}
                  >
                    {topic.category}
                  </span>
                </div>

                <p className="text-sm mb-3" style={{ color: colors.charcoal }}>
                  {topic.description}
                </p>

                <p className="text-xs mb-4" style={{ color: colors.charcoal }}>
                  By {topic.author} on {new Date(topic.date).toLocaleDateString()}
                </p>

                {/* Preview */}
                <div 
                  className="mb-4 p-3 rounded-lg text-sm max-h-20 overflow-hidden"
                  style={{ backgroundColor: colors.ivory, color: colors.charcoal }}
                >
                  {topic.content}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditTopic(topic)}
                    className="flex-1 px-4 py-2 font-bold rounded-lg transition hover:opacity-90 text-white"
                    style={{ backgroundColor: colors.navy }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTopic(topic.id)}
                    className="flex-1 px-4 py-2 font-bold rounded-lg transition hover:opacity-90 text-white"
                    style={{ backgroundColor: colors.error }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
