function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 4 + 5 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
  setInterval(createHeart, 300);

  /* Fireworks */
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let particles = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;
    const colors = ['#ff4fa3', '#ffd6ec', '#ff9ad5', '#ffffff'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x,
        y,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 3 + 1,
        radius: 2,
        life: 60,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animateFireworks);
  }

  setInterval(createFirework, 1200);
  animateFireworks();