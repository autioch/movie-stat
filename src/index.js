const stats = require('./stat.json');
const trimDict = require('./trimDict');
const description = require('./description');

// const drawer = require('./simple');
const drawer = require('./canvasjs_lib');

require('./style');

const ignoredStats = [
  'ffmpeg.audio[].codecLongName',
  'ffmpeg.video[].codecLongName',
  'ffmpeg.video[].duration',
  'ffmpeg.formatLongName',
  'omdb.runtime',
  'omdb.year'
];

stats
  .filter((stat) => ignoredStats.indexOf(stat.key) === -1)
  .forEach(function draw(stat) {
    trimDict(stat);
    description(stat);
    drawer(stat);
  });
