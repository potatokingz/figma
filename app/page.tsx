'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [l, setL] = useState('de');
  const t = l === 'de' ? {
    nav1: 'Startseite', nav2: 'Leistungen', nav3: 'Referenzen', nav4: 'Team',
    heroA: <>Meetings:<br/>In Ihrem<br/>Büro,<br/>auf<br/>deutsch.</>,
    heroB: <>Time-to-<br/>Market:<br/>Schneller<br/>ist<br/>besser.</>,
    h2title: <>Überlassen Sie<br/>Software-<br/>Entwicklung uns.</>,
    h2sub: 'Ihr Kerngeschäft ist hart genug.',
    sayHi: 'Sag Hallo!', send: 'Nachricht senden'
  } : {
    nav1: 'Home', nav2: 'Services', nav3: 'References', nav4: 'Team',
    heroA: <>Meetings:<br/>in your<br/>office,<br/>in<br/>English.</>,
    heroB: <>Time-to-<br/>Market:<br/>Faster<br/>is<br/>better.</>,
    h2title: <>Leave<br/>software<br/>development<br/>to us.</>,
    h2sub: 'Your core business is hard enough.',
    sayHi: 'Say Hi!', send: 'Send message'
  };
  const [n, setN] = useState(false);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const [h, setH] = useState(false);
  const scr = useRef<any>(null);
  const [tm, setTm] = useState(0);
  const { register, handleSubmit } = useForm();
  
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

      <motion.div initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: n ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)' }} transition={{ duration: 0.8 }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#7C3AED', zIndex: 999, pointerEvents: n ? 'auto' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflowY: 'auto', padding: '80px 20px' }}>
        <button onClick={() => setN(false)} style={{ position: 'absolute', top: '40px', right: '40px', color: 'white', fontWeight: 'bold', fontSize: '18px', background:'transparent', border:'none', cursor:'pointer' }}>✕ SCHLIESSEN</button>
        <a href="#hero" onClick={() => setN(false)} style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>{t.nav1}</a>
        <a href="#leistungen" onClick={() => setN(false)} style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>{t.nav2}</a>
        <a href="#referenzen" onClick={() => setN(false)} style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none', marginBottom: '30px' }}>{t.nav3}</a>
        <a href="#team" onClick={() => setN(false)} style={{ color: 'white', fontSize: '50px', fontWeight: '900', textDecoration: 'none' }}>{t.nav4}</a>
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

      <div id="hero" style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '120px', paddingTop: '40px' }}>
        <div style={{ width: 'min(700px, 90vw)', height: 'min(700px, 90vw)', borderRadius: '50%', background: 'linear-gradient(135deg, #00E5FF, #0088FF, #AA00FF)', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
          <Swiper modules={[Pagination]} pagination={{ clickable: true }} style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
            <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: '900', lineHeight: '1.1' }}>{t.heroA} <span style={{fontSize:'40px'}}>→</span></h2>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: '900', lineHeight: '1.1' }}>{t.heroB} <span style={{fontSize:'40px'}}>→</span></h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="leistungen" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onMouseMove={(e) => { setMx(e.clientX); setMy(e.clientY); }} style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', cursor: 'none', gap: '40px' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ color: '#00E5FF', fontSize: 'clamp(32px, 5vw, 55px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px' }}>{t.h2title}</h2>
          <p style={{ color: '#888', fontSize: '24px' }}>{t.h2sub}</p>
        </div>
        {/* Добавен minWidth: 0, за да не се чупи Swiper-a във flexbox */}
        <div style={{ flex: '1 1 400px', pointerEvents: 'none', minWidth: 0 }}>
          <Swiper>
            <SwiperSlide>
              {/* Използваме div с backgroundImage, за да няма черен блок ако снимката не зареди */}
              <div style={{ width: '100%', height: '400px', borderRadius: '10px', background: '#e0e0e0 url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80") center/cover no-repeat' }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ width: '100%', height: '400px', borderRadius: '10px', background: '#d0d0d0 url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80") center/cover no-repeat' }}></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="referenzen" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1} grabCursor={true}>
          <SwiperSlide>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', paddingBottom: '50px' }}>
              <div style={{ width: '320px', height: '320px', borderRadius: '50%', borderTop: '4px solid red', borderLeft: '4px solid red', padding: '10px', margin: '0 auto' }}>
                <img src="https://i.ibb.co/DHTJ1gMR/lieferheld-png.png" alt="Lieferheld" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ color: '#00E5FF', fontSize: '40px', fontWeight: '900', margin: 0 }}>Referenzen</h2>
                <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '10px 0' }}>Lieferheld</h3>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8' }}>Seit drei Jahren sind wir für Lieferheld tätig und übernehmen Aufgaben in Front- und Backend. Unsere Entwickler sind zu einem Bestandteil des Teams geworden.</p>
                <br/>
                <b style={{ fontSize: '15px' }}>Technologien:</b><br/>
                <span style={{ color: '#888', fontSize: '15px' }}>Backend: python, node.js</span><br/><br/>
                <a href="#" style={{ color: '#5B21B6', fontWeight: 'bold', textDecoration: 'none' }}>Projekt ansehen →</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', paddingBottom: '50px' }}>
              <div style={{ width: '320px', height: '320px', borderRadius: '50%', borderTop: '4px solid purple', borderLeft: '4px solid purple', padding: '10px', margin: '0 auto' }}>
                <img src="https://i.ibb.co/tTCTYKyZ/bubble-nova-png.png" alt="Bubble Nova" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ color: '#00E5FF', fontSize: '40px', fontWeight: '900', margin: 0 }}>Referenzen</h2>
                <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '10px 0' }}>Bubble Nova</h3>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8' }}>Für diese Spiele-App übernahmen wir die gesamte Kreation - Charaktere, UX/UI, Storyboard.</p>
                <br/>
                <b style={{ fontSize: '15px' }}>Technologien:</b><br/>
                <span style={{ color: '#888', fontSize: '15px' }}>Cocos 2D, Android und iOS</span><br/><br/>
                <a href="#" style={{ color: '#5B21B6', fontWeight: 'bold', textDecoration: 'none' }}>Projekt ansehen →</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div style={{ background: '#4C1D95', color: 'white', padding: '120px 40px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          <div style={{ width: 'min(400px, 100%)' }}>
            <h2 style={{ color: '#00E5FF', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: '900', lineHeight: '1.1' }}>Zu wenig<br/>Time-to-Market?</h2>
            <br/>
            <b style={{ fontSize: '20px' }}>Wir haben die Talente für Ihre Sprints.</b>
            <br/><br/>
            <p style={{ opacity: 0.8, fontSize: '15px', lineHeight: '1.8' }}>Bears & Dolphins arbeitet für mittelständische Unternehmen und Agenturen. Sie wollen Ihre digitale Transformation beschleunigen?</p>
          </div>
          <div ref={scr} style={{ display: 'flex', gap: '60px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div style={{ width: '300px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}><div style={{ width: '60px', height: '60px', border: '2px solid white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '20px' }}>📱</div><h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Mobile Apps</h3></div>
              <p style={{ opacity: 0.8, lineHeight: '2.2', fontSize: '15px' }}>iOS<br/>Android<br/>Adobe PhoneGap<br/>Unity 3D</p>
            </div>
            <div style={{ width: '300px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}><div style={{ width: '60px', height: '60px', border: '2px solid white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '20px' }}>{'</>'}</div><h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Web</h3></div>
              <p style={{ opacity: 0.8, lineHeight: '2.2', fontSize: '15px' }}>HTML 5<br/>CSS 3<br/>React.js<br/>Angular.js</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#00E5FF', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: '900' }}>Für innovative Software<br/>tun wir alles.</h2>
        <br/><br/>
        <svg width="600" height="100" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', maxWidth: '600px', height: 'auto' }}>
          <rect x="0" y="40" width="600" height="15" fill="#E5E7EB" rx="7" />
          <line x1="0" y1="47" x2="250" y2="47" stroke="#5B21B6" strokeWidth="15" strokeLinecap="round" />
          <circle cx="250" cy="47" r="20" fill="#00E5FF" />
        </svg>
      </div>

      <div id="team" style={{ padding: '100px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          <div onClick={() => setTm(1)} style={{ flex: '1 1 300px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ background: tm === 1 ? '#00E5FF' : '#fff', padding: '30px', textAlign: 'center', transition: 'background 0.3s' }}>
              <h3 style={{ margin: 0, color: tm === 1 ? 'white' : '#1D1D1B', fontSize: '28px', fontWeight: '900' }}>Georgi Stoev</h3>
            </div>
            {tm === 1 && <div style={{ padding: '30px', fontSize: '15px', lineHeight: '1.8', background: 'white', color: '#555' }}>Die meiste Zeit seines Lebens studierte und arbeitete Georgi Stoev in Deutschland.</div>}
          </div>
        </div>
      </div>

      <div style={{ padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '500px', background: 'linear-gradient(to bottom right, #0088FF, #AA00FF)', borderRadius: '0 0 50% 50%', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', background: 'white', padding: '60px', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: '900', marginBottom: '40px', color: '#1D1D1B' }}>{t.sayHi}</h2>
          <form onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))}>
            <input {...register('email', { required: true })} type="email" placeholder="E-Mail" required style={{ width: '100%', padding: '20px', marginBottom: '20px', border: '2px solid #eee', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
            <button type="submit" style={{ background: '#00E5FF', color: 'white', padding: '20px 40px', border: 'none', borderRadius: '8px', fontWeight: '900', fontSize: '18px', cursor: 'pointer', width: '100%' }}>{t.send}</button>
          </form>
        </div>
      </div>

    </div>
  );
}
