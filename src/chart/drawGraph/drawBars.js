const {
  offsetTop, fontSize, half, serieColors, chartHeight, canvasWidth,
  labelMargin, labelColor, maxBarWidth, barSpace
 } = require('./config');

function getLabelSeries(series, offsetLeft, serieSpace) {
  if (serieSpace > fontSize) {
    return series;
  }
  const filteredSeries = [];
  let currentLabelPosition = 0;

  while (currentLabelPosition < canvasWidth - offsetLeft) {
    const nextIndex = Math.floor(currentLabelPosition / serieSpace);

    filteredSeries.push(series[nextIndex]);
    currentLabelPosition += fontSize + labelMargin;
  }

  return filteredSeries;
}

module.exports = function drawBars(ctx, stat, offsetLeft) {
  const { variety, series, maxValue } = stat;
  const serieSpace = (canvasWidth - offsetLeft) / variety;
  const barWidth = Math.min(serieSpace, maxBarWidth);
  const serieCenterX = offsetLeft + ((serieSpace - barWidth) * half) + barSpace;
  const serieY = offsetTop + chartHeight;
  const labelX = (offsetTop + chartHeight + labelMargin) * -1;

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
  getLabelSeries(series, offsetLeft, serieSpace)
    .forEach((serie) => ctx.fillText(serie.label, labelX, ((serie.index + half) * serieSpace) + offsetLeft));
};
