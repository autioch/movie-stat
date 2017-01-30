const setupCanvas = require('./setupCanvas');
const drawAxisY = require('./drawAxisY');
const drawAxes = require('./drawAxes');
const drawBars = require('./drawBars');
const drawLabels = require('./drawLabels');
const trimDict = require('./trimDict');

const HALF = 0.5;
const scrollSize = 50;

function getMax(dict) {
  return Math.max(...Object.keys(dict).map((key) => dict[key]));
}

module.exports = function drawGraph(canvas, stat) {
  trimDict(stat);
  let prop;
  let measureResult;
  const ctx = canvas.getContext('2d');
  const yMax = getMax(stat.dict);
  let offsetLeft = ctx.measureText(yMax).width;

  let offsetBottom = 0;

  for (prop in stat.dict) {
    measureResult = ctx.measureText(prop);
    if (measureResult.width > offsetBottom) {
      offsetBottom = measureResult.width;
    }
  }

  const offsetTop = 5.5;

  offsetLeft = Math.floor(offsetLeft + 10) + HALF;
  offsetBottom = Math.floor(offsetBottom + 10) + HALF;
  const width = window.innerWidth - offsetLeft - scrollSize;
  const height = 200;

  setupCanvas(canvas, width + offsetLeft, height + offsetBottom + 30);

  drawAxisY(ctx, width, height, offsetLeft, offsetTop, yMax);
  drawAxes(ctx, offsetTop, offsetLeft, height, width);
  drawBars(ctx, stat, width, height, yMax, offsetLeft);
  drawLabels(ctx, stat, width, height, offsetLeft);
};
