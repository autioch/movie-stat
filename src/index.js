const ignoredStats = [
  'ffmpeg.audio[].codecLongName',
  'ffmpeg.video[].codecLongName',
  'ffmpeg.video[].duration',
  'omdb.runtime',
  'omdb.year'
];
const allStats = require('./stat.json');
const simpleCharts = require('./simple');

require('./style');

simpleCharts(allStats.filter((stat) => ignoredStats.indexOf(stat.key) === -1));
