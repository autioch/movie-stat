const drawGraph = require('./drawGraph');
const tag = require('lean-tag');

require('./style');

module.exports = function simple(stat) {
  return tag('.stat-chart', drawGraph(tag('canvas.stat-canvas'), stat.chart));
};
