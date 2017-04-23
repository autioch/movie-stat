const underscoreRegex = /_/g;
const dotRegex = /\./g;
const bracketRegex = /\[\]/g;
const ffmpegRegex = /ffmpeg/g;
const omdbRegex = /omdb/g;

const debug = true;

module.exports = function parseHeader(stat, index) {
  const parsed = stat.key

    .replace(ffmpegRegex, '')
    .replace(omdbRegex, '')
    .replace(underscoreRegex, ' ')
    .replace(dotRegex, ' ')
    .replace(bracketRegex, ' ')
    .replace(/\.?([A-Z]+)/g, (match, group) => ` ${group}`)
    .replace(/^_/, '');

  const suffix = debug ? ` (${stat.key})` : '';

  return `${index + 1}. ${parsed}${suffix}`;
};
