module.exports = function setupCanvas(canvas, width, height) {
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.font = '14px Consolas';
  ctx.lineWidth = 1;

  return ctx;
};
