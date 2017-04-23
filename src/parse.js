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
  'ffmpeg.audio[].profile',
  'ffmpeg.video[].level',
  'ffmpeg.video[].displayAspectRatio',
  'ffmpeg.subtitle[].disposition[]',
  'ffmpeg.video[].profile',
  'ffmpeg.video[].pixFmt',
  'ffmpeg.unkown[].duration'
];

const statGroups = [
  'year',
  'language',
  'width',
  'height',
  'codec'
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

function groupStats(stats) {
  const groupedStats = [];

  let remainingStats = stats;

  statGroups.forEach((statGroup) => {
    remainingStats = remainingStats.filter((stat) => {
      if (stat.key.toLowerCase().includes(statGroup)) {
        groupedStats.push(stat);

        return false;
      }

      return true;
    });
  });

  return groupedStats.concat(remainingStats);
}

module.exports = function parse(stats) {
  return groupStats(filterStats(stats)).map(parseStat);
};
