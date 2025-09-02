import React, { useEffect, useRef } from 'react';
import Navbar2 from "./Navbar2";

const SkillsExperience = () => {
  const skills = [
    'React', 'JSON', 'express', 'Node', 'HTML', 'CSS', 'JavaScript', 'npm',
    'Bootstrap'
  ];

  const DataSkills = ['Python', 'Machine Learning', 'ML Algorithms', 'Clustering Techniques', 'Extracting Data', 'Classifiers', 'Making Models', 'Predictions'];
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;
    
    const drawOrbit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw sun
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 50);
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(1, '#FFA500');
      ctx.fillStyle = gradient;
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw orbit path
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw skills as planets
      const time = Date.now() / 2000;
      DataSkills.forEach((skill, i) => {
        const angle = (i * (2 * Math.PI / DataSkills.length)) + time;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Draw planet
        ctx.beginPath();
        ctx.fillStyle = `hsl(${i * 18}, 80%, 60%)`;
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw skill text
        ctx.fillStyle = '#fff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill, x, y);
      });
      
      requestAnimationFrame(drawOrbit);
    };
    
    drawOrbit();
    
    return () => {
      cancelAnimationFrame(drawOrbit);
    };
  }, []);
  
  return (
    <>
    <Navbar2 />
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.mainTitle}>Skills & Experience</h1>
        
        <p style={styles.description}>
         My main area of expertise lies in Data Science and Web Development.  
        <br /><br />
        I have hands-on experience with Python, Machine Learning algorithms (Regression, Classification, Clustering, SVM, KNN), and working with libraries such as NumPy, Pandas, Matplotlib, and Scikit-Learn. I also explore Deep Learning with CNNs for projects like handwritten digit recognition.  
        <br /><br />
        On the Web Development side, I work with modern frontend technologies such as React, JavaScript (TypeScript), HTML, CSS, and Tailwind, along with backend experience in Node.js, Express, and MongoDB. I enjoy building interactive and responsive applications.  
        <br /><br />
        I am passionate about solving real-world problems with data-driven insights and scalable web solutions. Visit my LinkedIn profile for more details or feel free to get in touch.

        </p>
        
        <div style={styles.divider}></div>
        
        <div style={styles.skillsContainer}>
          <div style={styles.textSection}>
            <h2 style={styles.sectionTitle}>Web Development</h2>
            <div style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
            
            <div style={styles.divider}></div>
            
            <h2 style={styles.sectionTitle}>Data Science</h2>
             <div style={styles.skillsGrid}>
              {DataSkills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div style={styles.orbitContainer}>
            <canvas 
              ref={canvasRef} 
              width={300} 
              height={300} 
              style={styles.canvas}
            />
            <div style={styles.orbitLabel}>Skills in Orbit</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margintop: '85px',
    minHeight: '100vh',
    backgroundColor: 'white',
    color: '#ffffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '2rem',
  },
  content: {
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: 'white',
     marginTop: '85px',
    borderRadius: '15px',
    padding: '2.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#61dafb',
    textShadow: '0 0 10px rgba(97, 218, 251, 0.5)',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '6rem',
    color: '#000000ff',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(to right, transparent, #61dafb, transparent)',
    margin: '2rem 0',
  },
  skillsContainer: {
    display: 'flex',
    gap: '2rem',
  },
  textSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#61dafb',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  skillItem: {
    padding: '0.7rem 0.5rem',
    backgroundColor: '#2d2d2d',
    borderRadius: '6px',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '0.95rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#61dafb',
      color: '#121212',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(97, 218, 251, 0.4)',
    },
  },
  orbitContainer: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  canvas: {
    borderRadius: '50%',
    boxShadow: '0 0 30px rgba(97, 218, 251, 0.2)',
    border: '1px solid rgba(97, 218, 251, 0.3)',
  },
  orbitLabel: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#61dafb',
    letterSpacing: '1px',
  },
};

export default SkillsExperience;