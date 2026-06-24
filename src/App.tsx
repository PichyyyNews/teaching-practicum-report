import { useState } from 'react';
import type { MouseEvent } from 'react';
import './App.css';

type Section = 'home' | 'about' | 'academics' | 'lessons' | 'gallery' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="app-container">
      {/* Swiss grid lines & diagonal lines overlay in background */}
      <div className="swiss-grid-overlay"></div>
      <div className="diagonal-line-1"></div>
      <div className="diagonal-line-2"></div>

      {/* Header */}
      <header className="header">
        <div className="header__logo">P. SOMBOON</div>
        <ul className="header__nav">
          <li className={`header__nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('home')}>00 Home</button>
          </li>
          <li className={`header__nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('about')}>01 Profile</button>
          </li>
          <li className={`header__nav-item ${activeSection === 'academics' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('academics')}>02 Academics</button>
          </li>
          <li className={`header__nav-item ${activeSection === 'lessons' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('lessons')}>03 Lessons</button>
          </li>
          <li className={`header__nav-item ${activeSection === 'gallery' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('gallery')}>04 Gallery</button>
          </li>
          <li className={`header__nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <button onClick={() => setActiveSection('contact')}>05 Contact</button>
          </li>
        </ul>
      </header>

      {/* Main Content: Split Grid */}
      <main className="hero-grid">
        {/* Left Side: Editorial Typography & Information */}
        <section className="hero__content">
          <div className="hero__top-marker">
            <span className="hero__marker-label font-mono">SWISS INTERNATIONAL STYLE</span>
            <span className="hero__marker-label font-mono">EDITION 2025</span>
          </div>

          <div className="hero__title-container">
            <h1 className="hero__title">
              PICHAYUT<br />SOMBOON
            </h1>
            <p className="hero__subtitle">
              Computer Science Educator specializing in computational thinking, programming logic, and systems architecture. Currently serving teaching practicum at Triam Udom Suksa School.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <button 
                className="close-btn"
                style={{ textTransform: 'uppercase' }}
                onClick={() => setActiveSection('about')}
              >
                Explore Profile →
              </button>
              <button 
                className="close-btn" 
                style={{ textTransform: 'uppercase', backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
                onClick={() => setActiveSection('lessons')}
              >
                View Lessons
              </button>
            </div>
          </div>

          <div className="hero__footer-meta">
            <div className="meta-box">
              <p className="meta-box__label">Subject area</p>
              <p className="meta-box__value">Computer Science & Python</p>
            </div>
            <div className="meta-box">
              <p className="meta-box__label">Institution</p>
              <p className="meta-box__value">Triam Udom Suksa School</p>
            </div>
          </div>
        </section>

        {/* Right Side: Portrait Image & Interactive Lines */}
        <section className="hero__visual">
          <div className="visual-coordinate coord-top-left font-mono">[N 47° 22' 36.84" / E 8° 32' 30.12"]</div>
          <div className="visual-coordinate coord-top-right font-mono">SWISS DESIGN SYSTEM</div>
          <div className="visual-coordinate coord-bottom-left font-mono">GRID: 80PX BASELINE</div>
          <div className="visual-coordinate coord-bottom-right font-mono">
            {isHoveringPortrait ? `X: ${coords.x}px | Y: ${coords.y}px` : 'MOUSE OVER PORTRAIT'}
          </div>

          <div className="portrait-frame">
            <div 
              className="portrait-container"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHoveringPortrait(true)}
              onMouseLeave={() => setIsHoveringPortrait(false)}
            >
              {/* Interactive target lines tracking mouse */}
              {isHoveringPortrait && (
                <>
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: `${coords.y}px`,
                      width: '100%',
                      height: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      zIndex: 8,
                      pointerEvents: 'none'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      left: `${coords.x}px`,
                      top: 0,
                      width: '1px',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      zIndex: 8,
                      pointerEvents: 'none'
                    }}
                  />
                  <div 
                    className="font-mono"
                    style={{
                      position: 'absolute',
                      left: `${coords.x + 10}px`,
                      top: `${coords.y + 10}px`,
                      color: '#ffffff',
                      fontSize: '9px',
                      zIndex: 9,
                      pointerEvents: 'none',
                      backgroundColor: '#000000',
                      padding: '2px 4px',
                      border: '1px solid #333333'
                    }}
                  >
                    [{coords.x}, {coords.y}]
                  </div>
                </>
              )}

              <img 
                src="/profile.png" 
                alt="Pichayut Somboon portrait" 
                className="portrait-image"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Sliding detail drawers for sections */}

      {/* PROFILE DRAWER */}
      <div className={`detail-drawer ${activeSection === 'about' ? 'active' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">01 / PROFILE</h2>
          <button className="close-btn" onClick={() => setActiveSection('home')}>CLOSE ✕</button>
        </div>
        <div className="drawer-body">
          <div className="about-section">
            <div className="profile-quote">
              "Programming is not just about writing code; it is about structuring logical thoughts to solve complex real-world problems."
            </div>
            <p className="bio-paragraph">
              I am Pichayut Somboon, a computer education student-teacher. My pedagogical approach focus on Active Learning, helping students construct their own logical models through block-based and text-based coding exercises. I prioritize developing computational thinking skills rather than rote-learning programming syntaxes.
            </p>

            <h3 style={{ marginTop: '24px', fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>PRACTICUM METRICS</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-item__num">160+</p>
                <p className="stat-item__label">Teaching Hours</p>
              </div>
              <div className="stat-item">
                <p className="stat-item__num">120+</p>
                <p className="stat-item__label">Students Taught</p>
              </div>
              <div className="stat-item">
                <p className="stat-item__num">4</p>
                <p className="stat-item__label">Assigned Classes</p>
              </div>
              <div className="stat-item">
                <p className="stat-item__num">100%</p>
                <p className="stat-item__label">Student Pass Rate</p>
              </div>
            </div>

            <h3 style={{ marginTop: '24px', fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>EDUCATION</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">2021 - 2025</span>
                <div>
                  <h4 className="timeline-title">Bachelor of Science in Technical Education (B.S.Tech.Ed)</h4>
                  <p className="timeline-desc">Major in Computer Education. Focused on instructional design, database systems, and school informatics systems management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACADEMICS DRAWER */}
      <div className={`detail-drawer ${activeSection === 'academics' ? 'active' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">02 / ACADEMICS</h2>
          <button className="close-btn" onClick={() => setActiveSection('home')}>CLOSE ✕</button>
        </div>
        <div className="drawer-body">
          <div className="about-section">
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>TEACHING DUTIES</h3>
            <p className="bio-paragraph">
              During my practicum at Triam Udom Suksa School, I took responsibility for lecturing Grade 10 students in basic computational logic, algorithmic thinking, and introductory Python programming.
            </p>
            
            <h3 style={{ marginTop: '24px', fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>CLASS ASSIGNMENTS</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">Class 811</span>
                <div>
                  <h4 className="timeline-title">Computer Science 1 (ว30181)</h4>
                  <p className="timeline-desc">Grade 10 · 2 Hours per week · Focusing on logical structure and flowcharts.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Class 812</span>
                <div>
                  <h4 className="timeline-title">Computer Science 1 (ว30181)</h4>
                  <p className="timeline-desc">Grade 10 · 2 Hours per week · Focus on Decomposition and Pattern recognition.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Class 813</span>
                <div>
                  <h4 className="timeline-title">Introductory Programming (ว30182)</h4>
                  <p className="timeline-desc">Grade 10 · 2 Hours per week · Core programming principles in Python.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LESSON PLANS DRAWER */}
      <div className={`detail-drawer ${activeSection === 'lessons' ? 'active' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">03 / LESSON PLANS</h2>
          <button className="close-btn" onClick={() => setActiveSection('home')}>CLOSE ✕</button>
        </div>
        <div className="drawer-body">
          <div className="lessons-list">
            <div className="lesson-card">
              <span className="lesson-card__num font-mono">01</span>
              <div className="lesson-card__content">
                <h4 className="lesson-card__title">Algorithmic Problem Solving</h4>
                <p className="lesson-card__desc">Deconstruct problems and map step-by-step algorithms using pseudocode.</p>
              </div>
              <button className="lesson-card__btn font-mono" onClick={() => alert('Downloading: Lesson_Plan_01_Algorithms.pdf')}>PDF</button>
            </div>
            
            <div className="lesson-card">
              <span className="lesson-card__num font-mono">02</span>
              <div className="lesson-card__content">
                <h4 className="lesson-card__title">Python Conditional Structures</h4>
                <p className="lesson-card__desc">Hands-on lab detailing if, else, and nested conditions logic structures.</p>
              </div>
              <button className="lesson-card__btn font-mono" onClick={() => alert('Downloading: Lesson_Plan_02_Conditionals.pdf')}>PDF</button>
            </div>
            
            <div className="lesson-card">
              <span className="lesson-card__num font-mono">03</span>
              <div className="lesson-card__content">
                <h4 className="lesson-card__title">Introduction to Web Grids</h4>
                <p className="lesson-card__desc">Basic HTML layouts utilizing modern CSS grids and alignments.</p>
              </div>
              <button className="lesson-card__btn font-mono" onClick={() => alert('Downloading: Lesson_Plan_03_WebGrids.pdf')}>PDF</button>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY DRAWER */}
      <div className={`detail-drawer ${activeSection === 'gallery' ? 'active' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">04 / GALLERY</h2>
          <button className="close-btn" onClick={() => setActiveSection('home')}>CLOSE ✕</button>
        </div>
        <div className="drawer-body">
          <div className="photo-gallery">
            <div className="gallery-photo">
              <div className="gallery-photo__label">01 / PROGRAMMING LAB</div>
              <div className="gallery-photo__bg">CLASSROOM SESSION</div>
            </div>
            <div className="gallery-photo">
              <div className="gallery-photo__label">02 / STUDENT WORK</div>
              <div className="gallery-photo__bg">LOGICAL FLOWCHARTS</div>
            </div>
            <div className="gallery-photo">
              <div className="gallery-photo__label">03 / ACTIVE STUDY</div>
              <div className="gallery-photo__bg">PYTHON INTRO</div>
            </div>
            <div className="gallery-photo">
              <div className="gallery-photo__label">04 / DISCUSSION</div>
              <div className="gallery-photo__bg">PAIR PROGRAMMING</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT DRAWER */}
      <div className={`detail-drawer ${activeSection === 'contact' ? 'active' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">05 / CONTACT</h2>
          <button className="close-btn" onClick={() => setActiveSection('home')}>CLOSE ✕</button>
        </div>
        <div className="drawer-body">
          {formSubmitted ? (
            <div className="profile-quote" style={{ borderLeftColor: '#ffffff' }}>
              Thank you! Your message has been sent successfully. I will get back to you shortly.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <input 
                  type="text" 
                  id="message" 
                  className="form-input" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
