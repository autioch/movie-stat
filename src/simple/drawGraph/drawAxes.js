module.exports = function drawAxes(ctx, offsetTop, offsetLeft, height, width) {
  ctx.strokeStyle = '#aaa';
  ctx.beginPath();
  ctx.moveTo(offsetLeft, offsetTop);
  ctx.lineTo(offsetLeft, height);
  ctx.lineTo(width + offsetLeft, height);
  ctx.stroke();
};
