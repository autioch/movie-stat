const { height, width } = require('./config');

const HALF = 0.5;

function drawAxisYhelper(ctx, value, left, offsetTop, fixedWidth) {
  offsetTop = Math.ceil(offsetTop) + HALF;
  ctx.fillText(value, left - 5, offsetTop);
  ctx.beginPath();
  ctx.moveTo(left, offsetTop);
  ctx.lineTo(fixedWidth + left, offsetTop);
  ctx.stroke();
}

module.exports = function drawAxisY(ctx, offsetLeft, offsetTop, yMax) {
  ctx.strokeStyle = '#eee';
  ctx.fillStyle = '#444';
  ctx.fillText('0', offsetLeft - 5, height);
  const lines = 6;

  for (let index = 1; index < lines; index++) {
    drawAxisYhelper(ctx, Math.ceil(yMax / lines * (lines - index)), offsetLeft, (height + offsetTop) / lines * index, width - offsetLeft);
  }
  drawAxisYhelper(ctx, Math.ceil(yMax), offsetLeft, offsetTop, width - offsetLeft);
};
