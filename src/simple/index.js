const drawGraph = require('./drawGraph');

require('./style');

module.exports = function simple(stat) {
  const canvas = document.createElement('canvas');

  document.body.appendChild(canvas);
  drawGraph(canvas, stat);
};
