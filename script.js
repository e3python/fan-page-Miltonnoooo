document.addEventListener('DOMContentLoaded', ()=>{
  const buildBtn = document.getElementById('buildBtn');
  const themeToggle = document.getElementById('themeToggle');
  const burgerStage = document.getElementById('burgerStage');
  const lettuce = document.getElementById('lettuce');
  const tomato = document.getElementById('tomato');
  const cheese = document.getElementById('cheese');
  const patty = document.getElementById('patty');

  // Simple theme toggle
  themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Randomize burger layers with a little animation
  function randomizeBurger(){
    const choices = {
      lettuce: Math.random() > 0.25,
      tomato: Math.random() > 0.35,
      cheese: Math.random() > 0.5,
      pattyShift: (Math.random()-0.5)*6
    };

    lettuce.style.opacity = choices.lettuce ? '0.95' : '0';
    tomato.style.opacity = choices.tomato ? '1' : '0';
    cheese.style.opacity = choices.cheese ? '0.95' : '0';
    patty.style.transform = `translateY(${choices.pattyShift}px)`;

    // lively bounce
    burgerStage.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-8px)' },
      { transform: 'translateY(0)' }
    ], { duration: 600, easing: 'cubic-bezier(.2,.9,.3,1)' });
  }

  buildBtn.addEventListener('click', ()=>{
    randomizeBurger();
  });

  // add small interaction for order buttons
  document.querySelectorAll('.card .btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.target.textContent = 'Added ✓';
      setTimeout(()=> e.target.textContent = 'Order', 1400);
    });
  });

});
