const fetchJson = require('utils/fetchJson');
const tag = require('lean-tag');
const headerRender = require('./header/render');
const summaryRender = require('./summary/render');
const chartRender = require('./chart/render');
const chartParse = require('./chart/parse');

require('./style');

/* This will copy it to dist folder. */
require('./stat.json');

function renderStat(stat) {
  return tag('.stat', [
    headerRender(stat),
    summaryRender(stat),
    chartRender(stat)
  ]);
}

function getHeaderSuffix(stat, chartData) {
  const totalSeries = stat.series.length;
  const chartSeries = chartData.series.length;

  if (totalSeries === chartSeries) {
    return '';
  }

  return ` (top ${chartSeries} series of ${totalSeries} total)`;
}

function parseStat(stat) {
  const chartData = chartParse(stat);

  return {
    summary: stat.summary,
    header: `${stat.header}${getHeaderSuffix(stat, chartData)}`,
    chart: chartData
  };
}

fetchJson('/stat.json').then((stats) => {
  const parsedStats = stats.map(parseStat);
  const renderedStats = parsedStats.map(renderStat);

  document.body.appendChild(tag('.stat-list', renderedStats));
});
