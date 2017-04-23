const summaryParse = require('./summary/parse');
const headerParse = require('./header/parse');
const chartParse = require('./chart/parse');

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
  'subs.generated',
  'ffmpeg.unkown[].tags.mimetype',
  'ffmpeg.video[].isAvc',
  'ffmpeg.unkown[].codec_long_name',
  'ffmpeg.subtitle[].disposition[]',
  'ffmpeg.unkown[].duration'
];

function filterStats(stats) {
  return stats
    .filter((stat) => ignoredStats.indexOf(stat.key) === -1)
    .filter((stat) => stat.variety > 1);
}

function parseStat(stat, index) {
  return {
    summary: summaryParse(stat),
    header: headerParse(stat, index),
    chart: chartParse(stat)
  };
}

module.exports = function parse(stats) {
  return filterStats(stats).map(parseStat);
};
