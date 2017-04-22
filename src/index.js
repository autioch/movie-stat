const tag = require('lean-tag');
const stats = require('./stat.json');

const headerRender = require('./header/render');
const headerParse = require('./header/parse');
const chartParse = require('./chart/parse');

const summaryRender = require('./summary/render');
const summaryParse = require('./summary/parse');
const chartRender = require('./chart/render');

require('./style');

const ignoredStats = [

  // 'ffmpeg.audio[].codecLongName',
  // 'ffmpeg.video[].codecLongName',
  // 'ffmpeg.video[].duration',
  // 'ffmpeg.formatLongName',
  // 'omdb.runtime',
  // 'omdb.year'
];

stats
  .filter((stat) => ignoredStats.indexOf(stat.key) === -1)
  .map((stat) => ({
    summary: summaryParse(stat),
    header: headerParse(stat),
    chart: chartParse(stat)
  }))
  .map((stat) => tag('.stat', [
    headerRender(stat),
    summaryRender(stat),
    chartRender(stat)
  ]))
  .forEach((el) => document.body.appendChild(el));
