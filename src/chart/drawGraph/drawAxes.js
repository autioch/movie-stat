const { height, width } = require('./config');

module.exports = function drawAxes(ctx, offsetTop, offsetLeft) {
  ctx.strokeStyle = '#aaa';
  ctx.beginPath();
  ctx.moveTo(offsetLeft, offsetTop);
  ctx.lineTo(offsetLeft, height);
  ctx.lineTo(width, height);
  ctx.stroke();
};
