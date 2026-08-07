'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [l, setL] = useState('de');
  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden', color: '#1D1D1B', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '50px' }}><h1>Project Setup (PR 1)</h1></div>
    </div>
  );
}
