const { chartHeight, canvasWidth, offsetTop, half, labelMargin, helperAxisColor, labelColor } = require('./config');

module.exports = function drawHelperLines(ctx, stat, offsetLeft) {
  ctx.strokeStyle = helperAxisColor;
  ctx.fillStyle = labelColor;
  ctx.fillText('0', offsetLeft - labelMargin, chartHeight + offsetTop);
  const { intermediateValues } = stat;
  const helperCount = intermediateValues.length;

  for (let index = 0; index < helperCount; index++) {
    const roundedOffsetTop = Math.ceil((chartHeight / helperCount * index) + offsetTop) + half;

    ctx.fillText(intermediateValues[index], offsetLeft - labelMargin, roundedOffsetTop);
    ctx.beginPath();
    ctx.moveTo(offsetLeft, roundedOffsetTop);
    ctx.lineTo(canvasWidth, roundedOffsetTop);
    ctx.stroke();
  }
};
