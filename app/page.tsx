'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [l, setL] = useState('de');
  const [n, setN] = useState(false);
  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden', color: '#1D1D1B', fontFamily: 'sans-serif' }}>
      <motion.div initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: n ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)' }} transition={{ duration: 0.8 }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#7C3AED', zIndex: 999, pointerEvents: n ? 'auto' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={() => setN(false)} style={{ position: 'absolute', top: '40px', right: '40px', color: 'white', fontWeight: 'bold', fontSize: '18px', background:'transparent', border:'none', cursor:'pointer' }}>✕ SCHLIESSEN</button>
        <a href="#" style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>Startseite</a>
        <a href="#" style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>Leistungen</a>
        <a href="#" style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>Referenzen</a>
        <a href="#" style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none' }}>Team</a>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 40px', position: 'relative', zIndex: 40, background: 'white', borderBottom: '1px solid #eee' }}>
        <h1 style={{ color: '#5B21B6', fontWeight: '900', fontSize: '24px', margin: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '30px', height: '30px', background: '#5B21B6', borderRadius: '50%', marginRight: '10px' }}></div>
          BEARS & DOLPHINS
        </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => setL('en')} style={{ background: l === 'en' ? 'black' : '#eee', color: l === 'en' ? 'white' : '#888', padding: '5px 15px', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', border:'none', cursor:'pointer' }}>EN</button>
          <button onClick={() => setL('de')} style={{ background: l === 'de' ? 'black' : '#eee', color: l === 'de' ? 'white' : '#888', padding: '5px 15px', borderRadius: '20px', marginRight: '30px', fontWeight: 'bold', border:'none', cursor:'pointer' }}>DE</button>
          <button onClick={() => setN(true)} style={{ background: 'transparent', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', color:'#555' }}>Menü ☰</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '120px' }}>
        <div style={{ width: '700px', height: '700px', borderRadius: '50%', background: 'linear-gradient(135deg, #00E5FF, #0088FF, #AA00FF)', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        </div>
      </div>
    </div>
  );
}
