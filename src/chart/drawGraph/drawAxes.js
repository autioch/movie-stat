const { chartHeight, canvasWidth, offsetTop, axisColor } = require('./config');

module.exports = function drawAxes(ctx, offsetLeft) {
  ctx.strokeStyle = axisColor;
  ctx.beginPath();
  ctx.moveTo(offsetLeft, offsetTop);
  ctx.lineTo(offsetLeft, chartHeight + offsetTop);
  ctx.lineTo(canvasWidth, chartHeight + offsetTop);
  ctx.stroke();
};
