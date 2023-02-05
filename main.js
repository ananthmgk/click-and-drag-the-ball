window.addEventListener('load', () => {
  const ball = document.querySelector('.ball');
  let isDown = false;
  let startX;
  let startY;

  // Get current origin (x & y) of the ball
  let originX = ball.offsetLeft;
  let originY = ball.offsetTop;

  ball.addEventListener('mousedown', (e) => {
    isDown = true;
    ball.style.cursor = 'grabbing';
    startX = e.pageX - ball.offsetLeft;
    startY = e.pageY - ball.offsetTop;
  });

  ball.addEventListener('mouseleave', (e) => {
    isDown = false;
    ball.style.cursor = 'pointer';
  });

  ball.addEventListener('mouseup', () => {
    isDown = false;
    ball.style.cursor = 'pointer';
  });

  ball.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const currentX = e.pageX - ball.offsetLeft;
    const currentY = e.pageY - ball.offsetTop;
    const walkX = currentX - startX;
    const walkY = currentY - startY;

    // move the ball
    ball.style.left = `${originX + walkX}px`;
    ball.style.top = `${originY + walkY}px`;
    originX += walkX;
    originY += walkY;
  });
});
