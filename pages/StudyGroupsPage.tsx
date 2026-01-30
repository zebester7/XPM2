
import React, { useState, useEffect } from 'react';
import { User, StudyGroup, GroupMessage, Level } from '../types';
import { db } from '../db';

interface StudyGroupsPageProps {
  user: User;
}

const StudyGroupsPage: React.FC<StudyGroupsPageProps> = ({ user }) => {
  const [groups, setGroups] = useState<StudyGroup[]>(db.getGroups());
  const [messages, setMessages] = useState<GroupMessage[]>(db.getGroupMessages());
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');

  const subjects = [
    'Physics', 'Mathematics', 'Chemistry', 'Biology', 
    'Computer Science', 'Business', 'Economics'
  ];
  const levels: Level[] = ['O Level', 'AS Level', 'A2 Level'];

  useEffect(() => {
    let existingGroups = db.getGroups();
    if (existingGroups.length === 0) {
      const newGroups: StudyGroup[] = [];
      levels.forEach(l => {
        subjects.forEach(s => {
          newGroups.push({ id: `${l}-${s}`.replace(' ', '-'), level: l, subject: s, members: [] });
        });
      });
      existingGroups = newGroups;
      localStorage.setItem('academia_groups', JSON.stringify(newGroups));
      setGroups(newGroups);
    }
  }, []);

  const activeGroup = groups.find(g => g.id === activeGroupId);
  const filteredMessages = messages.filter(m => m.groupId === activeGroupId);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeGroupId) return;

    const newMsg: GroupMessage = {
      id: Date.now().toString(),
      groupId: activeGroupId,
      userId: user.id,
      userName: user.name,
      text: messageText,
      timestamp: Date.now()
    };
    const updated = db.addGroupMessage(newMsg);
    setMessages(updated);
    setMessageText('');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar: Group List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Study Circles</h2>
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {groups.map(g => (
                <button
                  key={g.id}
                  onClick={() => setActiveGroupId(g.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    activeGroupId === g.id 
                    ? 'bg-xpm-blue border-xpm-blue text-white shadow-lg shadow-xpm-blue/20' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'
                  }`}
                >
                  <div className={`text-[10px] font-black uppercase mb-1 ${activeGroupId === g.id ? 'text-xpm-green' : 'text-slate-400'}`}>
                    {g.level}
                  </div>
                  <div className="font-bold text-sm">{g.subject} Group</div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            {activeGroup ? (
              <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 h-[75vh] flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{activeGroup.subject} Hub</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{activeGroup.level} Peers</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 text-[10px] flex items-center justify-center font-bold text-slate-400">+12</div>
                  </div>
                </div>

                <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/30">
                  {filteredMessages.length > 0 ? filteredMessages.map(m => (
                    <div key={m.id} className={`flex flex-col ${m.userId === user.id ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-slate-400">{m.userName}</span>
                        <span className="text-[9px] text-slate-300">{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className={`px-5 py-3 rounded-2xl max-w-md text-sm font-medium shadow-sm ${
                        m.userId === user.id ? 'bg-xpm-blue text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                      }`}>
                        {m.text}
                      </div>
                    </div>
                  )) : (
                    <div className="h-full flex flex-center items-center justify-center opacity-30 flex-col">
                       <p className="font-black uppercase tracking-widest">Start the conversation</p>
                    </div>
                  )}
                </div>

                <form onSubmit={sendMessage} className="p-6 border-t border-slate-100">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder={`Ask something in ${activeGroup.subject}...`}
                      className="flex-grow px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-medium transition"
                    />
                    <button type="submit" className="px-8 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-lg">Send</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-[75vh] bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Select a Hub</h3>
                <p className="text-slate-400 font-medium">Join a subject-specific circle to interact with your classmates.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyGroupsPage;
