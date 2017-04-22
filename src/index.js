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
  'ffmpeg.audio[].codecLongName',
  'ffmpeg.duration',
  'ffmpeg.formatLongName',
  'ffmpeg.generated',
  'ffmpeg.subtitle[].codecLongName',
  'ffmpeg.unkown[].duration_ts',
  'ffmpeg.unkown[].index',
  'ffmpeg.unkown[].tags.filename',
  'ffmpeg.video[].codecLongName',
  'ffmpeg.video[].duration',
  'file.generated',
  'omdb.generated',
  'omdb.imdbvotes',
  'omdb.poster',
  'subs.created',
  'subs.generated'
];

stats
  .filter((stat) => ignoredStats.indexOf(stat.key) === -1)
  .filter((stat) => stat.variety > 1)
  .map((stat, index) => ({
    summary: summaryParse(stat),
    header: headerParse(stat, index),
    chart: chartParse(stat)
  }))
  .map((stat) => tag('.stat', [
    headerRender(stat),
    summaryRender(stat),
    chartRender(stat)
  ]))
  .forEach((el) => document.body.appendChild(el));
