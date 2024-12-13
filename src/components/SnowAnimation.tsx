import React, { useEffect } from 'react';

export default function SnowAnimation() {
  useEffect(() => {
    const canvas = document.getElementById('snow') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const snowflakes: { x: number; y: number; radius: number; speed: number }[] = [];
    
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      
      snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
        
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y / 30) * 0.5;
        
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      id="snow"
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.7 }}
    />
  );
}