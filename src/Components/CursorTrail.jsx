import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // IDE Colors: Blue (Keywords), Teal (Classes), Orange (Strings), Yellow (Methods), Purple (Control), Green (Comments)
    const colors = ['#569cd6', '#4ec9b0', '#ce9178', '#dcdcaa', '#c586c0', '#6a9955'];
    
    // Algorithmic & Java concepts
    const symbols = [
      '{', '}', ';', 'O(1)', 'O(N)', 'O(log N)', 'O(N²)', '[]', '<T>',
      'void', 'public', 'TreeSet', 'private', 'TreeMap', 'PriorityQueue', 'class', 'interface', 'implements', 'extends', 
      'static', 'final', 'return', 'null', 'true', 'false',
      '0', '1', '=>', '++', '--', '==', '!=', '&&', '||',
      'HashMap', 'ArrayList', 'Graph', 'Tree', 'Digit DP', 'Node', 'Stack', 'Queue',
      'try', 'catch', 'throw', 'Exception', 'Thread', 'synchronized'
    ];

    let mouse = { x: null, y: null };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      
      // Much lower spawn rate to prevent clustering 
      if (Math.random() > 0.94) {
         particlesArray.push(new Particle(mouse.x, mouse.y));
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        
        // Very low rate for touch so dragging drops sparse, readable words
        if (Math.random() > 0.90) {
           particlesArray.push(new Particle(mouse.x, mouse.y));
        }
      }
    };

    const handleTouchStart = (event) => {
      if (event.touches.length > 0) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        
        // Spawn 1 just to acknowledge the touch
        if (Math.random() > 0.5) {
            particlesArray.push(new Particle(mouse.x, mouse.y));
        }
      }
    };

    const handleScroll = () => {
      // Very sparse during scrolling
      if (mouse.x !== null && mouse.y !== null) {
        if (Math.random() > 0.90) {
          particlesArray.push(new Particle(mouse.x, mouse.y));
        }
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 14; // Even larger font for mobile readability
        // Insanely slow drift so it just gently hovers near where you touched
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * 0.15 - 0.075;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.life = 1; // Opacity starting at max
      }
      
      update() {
        this.x += this.speedX;
        this.y -= Math.random() * 0.1 + 0.05; // Barely moving upwards
        this.life -= 0.003; // Incredibly slow fade out
      }
      
      draw() {
        ctx.fillStyle = `rgba(${hexToRgb(this.color)}, ${this.life > 0 ? this.life : 0})`;
        ctx.font = `${Math.floor(this.size)}px 'JetBrains Mono', monospace, sans-serif`;
        ctx.fillText(this.symbol, this.x, this.y);
      }
    }

    // Helper to convert IDE Hex code to RGB for rgba() opacity control
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '100, 100, 100'; // Fallback gray
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Wipe canvas clean each frame
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Remove dead particles
        if (particlesArray[i].life <= 0.05) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Adjust canvas when window resizes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Fixed overhead layer, doesn't block clicks (pointer-events-none)
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default CursorTrail;
