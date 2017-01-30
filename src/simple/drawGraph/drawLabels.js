module.exports = function drawLabels(ctx, stat, width, height, offsetLeft) {
  ctx.rotate(-90 * Math.PI / 180);
  ctx.fillStyle = '#444';
  let count = 0.5;
  const barCenter = width / stat.variety;
  let lastCenter = -100;
  let nextCenter;

  for (const prop in stat.dict) {
    nextCenter = (count * barCenter) + offsetLeft;
    if (nextCenter - lastCenter > 14) {
      ctx.fillText(prop, -height - 5, (count * barCenter) + offsetLeft);
      lastCenter = nextCenter;
    }
    count++;
  }
};
