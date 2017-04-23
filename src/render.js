const tag = require('lean-tag');
const headerRender = require('./header/render');
const summaryRender = require('./summary/render');
const chartRender = require('./chart/render');

function renderStat(stat) {
  return tag('.stat', [
    headerRender(stat),
    summaryRender(stat),
    chartRender(stat)
  ]);
}

module.exports = function render(stats) {
  return tag('.stat-list', stats.map(renderStat));
};
