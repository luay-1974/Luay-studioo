import React from 'react';
import { FaBook, FaPenFancy, FaImage, FaMusic, FaFilm, FaPlayCircle } from 'react-icons/fa';

const steps = [
  { name: 'Storyline', description: 'Create and brainstorm anime plots with AI.', url: 'https://deepai.org/chat/text-generator', icon: <FaBook size={28} /> },
  { name: 'Script', description: 'Write scenarios and dialogues using AI tools.', url: 'https://www.copy.ai/tools', icon: <FaPenFancy size={28} /> },
  { name: 'Graphics', description: 'Design characters and backgrounds with AI.', url: 'https://deepai.org/machine-learning-model/text2img', icon: <FaImage size={28} /> },
  { name: 'Sound', description: 'Compose music and voice using AI.', url: 'https://notegpt.io/text-to-speech', icon: <FaMusic size={28} /> },
  { name: 'Scene Assembly', description: 'Combine graphics, script, and sound.', url: 'https://www.canva.com/', icon: <FaFilm size={28} /> },
  { name: 'Preview/Export', description: 'Preview and export your anime.', url: 'https://www.capcut.com/', icon: <FaPlayCircle size={28} /> },
];

function AnimeStudioDashboard() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#222', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ textAlign: 'center' }}>AI Anime Studio</h1>
      <p style={{ textAlign: 'center' }}>Welcome, Luay! Choose a step to get started:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
        {steps.map((step) => (
          <a key={step.name} href={step.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '14px',
                padding: '28px',
                minWidth: '200px',
                fontSize: '1.1em',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                transition: 'transform 0.2s, background 0.2s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#555';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#333';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ marginBottom: '12px' }}>{step.icon}</div>
              <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{step.name}</div>
              <div style={{ fontSize: '0.9em', color: '#ddd' }}>{step.description}</div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AnimeStudioDashboard;
