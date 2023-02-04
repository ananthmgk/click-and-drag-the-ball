window.addEventListener('load', () => {
  const ball = document.querySelector('.ball');
  let isDown = false;
  let startX;
  let startY;

  ball.addEventListener('mousedown', (e) => {
    isDown = true;
    ball.style.cursor = 'grabbing';
    startX = e.pageX - ball.offsetLeft;
    startY = e.pageY - ball.offsetLeft;
  });

  ball.addEventListener('mouseleave', () => {
    isDown = false;
    ball.style.cursor = 'pointer';
  });

  ball.addEventListener('mouseup', () => {
    isDown = false;
    ball.style.cursor = 'pointer';
  });

  ball.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ball.offsetLeft;
    const y = e.pageY - ball.offsetLeft;
    const walkX = x - startX;
    const walkY = y - startY;
    ball.style.transform = `translate(${walkX}px, ${walkY}px)`;
  });
});
