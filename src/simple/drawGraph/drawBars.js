module.exports = function drawBars(ctx, stat, width, height, yMax, offsetLeft) {
  ctx.fillStyle = '#2bf';
  ctx.strokeStyle = '#2bf';
  let count = 0;
  const { variety, dict } = stat;
  const barWidth = width / variety;
  let prop;
  let barHeight;

  for (prop in dict) {
    barHeight = (dict[prop] / yMax) * height;
    ctx.fillRect(offsetLeft + (count * barWidth), height - barHeight, barWidth, barHeight);
    count++;
  }
};
