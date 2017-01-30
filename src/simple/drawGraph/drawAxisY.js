function drawAxisYhelper(ctx, value, left, offsetTop, width) {
  offsetTop = Math.ceil(offsetTop) + 0.5;
  ctx.fillText(value, left - 5, offsetTop);
  ctx.beginPath();
  ctx.moveTo(left, offsetTop);
  ctx.lineTo(width + left, offsetTop);
  ctx.stroke();
}

module.exports = function drawAxisY(ctx, width, height, offsetLeft, offsetTop, yMax) {
  ctx.strokeStyle = '#eee';
  ctx.fillStyle = '#444';
  ctx.fillText('0', offsetLeft - 5, height);
  const lines = 6;

  for (let index = 1; index < lines; index++) {
    drawAxisYhelper(ctx, Math.ceil(yMax / lines * (lines - index)), offsetLeft, (height + offsetTop) / lines * index, width);
  }
  drawAxisYhelper(ctx, Math.ceil(yMax), offsetLeft, offsetTop, width);
};
