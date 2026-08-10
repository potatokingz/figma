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
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const [h, setH] = useState(false);
  const scr = useRef<any>(null);
  useEffect(() => {
    if (scr.current) {
      const w = (e: any) => {
        if (scr.current.scrollWidth > scr.current.clientWidth) {
          const left = scr.current.scrollLeft === 0;
          const right = Math.ceil(scr.current.scrollLeft + scr.current.clientWidth) >= scr.current.scrollWidth;
          if ((e.deltaY < 0 && left) || (e.deltaY > 0 && right)) return;
          e.preventDefault();
          scr.current.scrollLeft += e.deltaY;
        }
      };
      scr.current.addEventListener('wheel', w, { passive: false });
      return () => { if(scr.current) scr.current.removeEventListener('wheel', w); };
    }
  }, []);
  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden', color: '#1D1D1B', fontFamily: 'sans-serif' }}>
      {h && (
        <div style={{ position: 'fixed', top: my - 24, left: mx - 24, width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #00E5FF', color: '#00E5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 9999, background: 'rgba(255,255,255,0.1)' }}>
          {mx < (typeof window !== 'undefined' ? window.innerWidth / 2 : 500) ? '←' : '→'}
        </div>
      )}
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
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onMouseMove={(e) => { setMx(e.clientX); setMy(e.clientY); }} style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', cursor: 'none' }}>
        <div style={{ flex: '1 1 500px', marginBottom: '40px' }}>
          <h2 style={{ color: '#00E5FF', fontSize: '55px', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px' }}>Überlassen Sie<br/>Software-<br/>Entwicklung uns.</h2>
          <p style={{ color: '#888', fontSize: '24px' }}>Ihr Kerngeschäft ist hart genug.</p>
        </div>
        <div style={{ flex: '1 1 500px', pointerEvents: 'none' }}>
          <Swiper>
            <SwiperSlide>
              <div style={{ width: '100%', height: '400px', background: '#ddd', borderRadius: '10px' }}></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1} grabCursor={true}>
          <SwiperSlide>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', paddingBottom: '50px' }}>
              <div style={{ width: '320px', height: '320px', borderRadius: '50%', borderTop: '4px solid red', borderLeft: '4px solid red', padding: '10px', margin: '0 auto' }}>
                <img src="https://i.ibb.co/DHTJ1gMR/lieferheld-png.png" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ color: '#00E5FF', fontSize: '40px', fontWeight: '900', margin: 0 }}>Referenzen</h2>
                <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '10px 0' }}>Lieferheld</h3>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8' }}>Seit drei Jahren sind wir für Lieferheld tätig und übernehmen Aufgaben in Front- und Backend.</p>
                <br/>
                <b style={{ fontSize: '15px' }}>Technologien:</b><br/>
                <span style={{ color: '#888', fontSize: '15px' }}>Backend: python, node.js</span><br/><br/>
                <a href="#" style={{ color: '#5B21B6', fontWeight: 'bold', textDecoration: 'none' }}>Projekt ansehen →</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{ background: '#4C1D95', color: 'white', padding: '120px 40px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          <div style={{ width: '400px', flexShrink: 0 }}>
            <h2 style={{ color: '#00E5FF', fontSize: '50px', fontWeight: '900', lineHeight: '1.1' }}>Zu wenig<br/>Time-to-Market?</h2>
            <br/>
            <b style={{ fontSize: '20px' }}>Wir haben die Talente für Ihre Sprints.</b>
            <br/><br/>
          </div>
          <div ref={scr} style={{ display: 'flex', gap: '60px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div style={{ width: '300px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}><div style={{ width: '60px', height: '60px', border: '2px solid white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '20px' }}>📱</div><h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Mobile Apps</h3></div>
              <p style={{ opacity: 0.8, lineHeight: '2.2', fontSize: '15px' }}>iOS<br/>Android<br/>Adobe PhoneGap<br/>Unity 3D</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
