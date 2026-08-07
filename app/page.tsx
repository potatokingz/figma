'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [l, setL] = useState('de');
  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden', color: '#1D1D1B', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 40px', position: 'relative', zIndex: 40, background: 'white', borderBottom: '1px solid #eee' }}>
        <h1 style={{ color: '#5B21B6', fontWeight: '900', fontSize: '24px', margin: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '30px', height: '30px', background: '#5B21B6', borderRadius: '50%', marginRight: '10px' }}></div>
          BEARS & DOLPHINS
        </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => setL('en')} style={{ background: l === 'en' ? 'black' : '#eee', color: l === 'en' ? 'white' : '#888', padding: '5px 15px', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', border:'none', cursor:'pointer' }}>EN</button>
          <button onClick={() => setL('de')} style={{ background: l === 'de' ? 'black' : '#eee', color: l === 'de' ? 'white' : '#888', padding: '5px 15px', borderRadius: '20px', marginRight: '30px', fontWeight: 'bold', border:'none', cursor:'pointer' }}>DE</button>
        </div>
      </div>
    </div>
  );
}
