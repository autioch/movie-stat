const { height, width } = require('./config');

module.exports = function setupCanvas(canvas, offsetBottom) {
  canvas.width = width;
  canvas.height = height + offsetBottom;
  const ctx = canvas.getContext('2d');

  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.font = '14px Consolas';
  ctx.lineWidth = 1;

  return ctx;
};
