const drawGraph = require('./drawGraph');

require('./style');
const dotRegex = /\./g;
const bracketRegex = /\[]/g;

module.exports = function simpleCharts(stats) {
  stats.forEach((stat) => {
    const header = document.createElement('h3');
    const canvas = document.createElement('canvas');

    header.textContent = stat.key.replace(dotRegex, ' ').replace(bracketRegex, '');

    document.body.appendChild(header);
    document.body.appendChild(canvas);
    drawGraph(canvas, stat);
  });
};
