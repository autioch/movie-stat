const {
  barSpace, canvasWidth, chartHeight, half,
  labelColor, labelMargin, valueColor, maxBarWidth, offsetTop, serieColors
} = require('./config');

module.exports = function drawBars(ctx, stat, offsetLeft) {
  const { series, maxValue } = stat;
  const serieSpace = (canvasWidth - offsetLeft) / series.length;
  const barWidth = Math.min(serieSpace, maxBarWidth);
  const serieCenterX = offsetLeft + ((serieSpace - barWidth) * half) + barSpace;
  const serieY = offsetTop + chartHeight;
  const labelX = (offsetTop + chartHeight + labelMargin) * -1;
  const valueX = (offsetTop + chartHeight - labelMargin - labelMargin) * -1;

  series
    .map((serie) => (serie.value / maxValue) * chartHeight)
    .forEach((barHeight, index) => {
      const serieColor = serieColors[index % serieColors.length];

      ctx.fillStyle = serieColor;
      ctx.strokeStyle = serieColor;
      ctx.fillRect(
        serieCenterX + (index * serieSpace),
        serieY - barHeight,
        barWidth - barSpace - barSpace,
        barHeight
      );
    });

  ctx.rotate(-Math.PI * half);
  ctx.fillStyle = labelColor;
  series
    .forEach((serie) => ctx.fillText(serie.label, labelX, ((serie.index + half) * serieSpace) + offsetLeft));

  ctx.textAlign = 'left';
  ctx.fillStyle = valueColor;
  series
    .forEach((serie) => ctx.fillText(serie.value, valueX, ((serie.index + half) * serieSpace) + offsetLeft));
};
