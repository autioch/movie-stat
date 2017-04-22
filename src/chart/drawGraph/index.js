const drawAxes = require('./drawAxes');
const drawHelperLines = require('./drawHelperLines');
const drawBars = require('./drawBars');
const { chartHeight, canvasWidth, offsetTop, half, labelMargin, fontSize } = require('./config');

function getLabelsWidth(ctx, values) {
  const labelWidths = values.map((key) => ctx.measureText(key).width);

  return Math.max(...labelWidths) + labelMargin + half;
}

function setContext(ctx) {
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.font = `${fontSize}px Consolas`;
  ctx.lineWidth = 1;
}

module.exports = function drawGraph(canvas, stat) {
  const ctx = canvas.getContext('2d');

  /* Set context to get true measurements */
  setContext(ctx);

  const left = getLabelsWidth(ctx, stat.intermediateValues);
  const bottom = getLabelsWidth(ctx, stat.labels);

  canvas.width = canvasWidth;
  canvas.height = chartHeight + bottom + offsetTop;
  setContext(ctx);
  drawAxes(ctx, left);
  drawHelperLines(ctx, stat, left);
  drawBars(ctx, stat, left);

  return canvas;
};
