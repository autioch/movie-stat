const underscoreRegex = /_/g;
const dotRegex = /\./g;
const bracketRegex = /\[\]/g;
const ffmpegRegex = /ffmpeg/g;
const omdbRegex = /omdb/g;

module.exports = function parseHeader(stat) {
  const parsed = stat.key

    .replace(ffmpegRegex, '')
    .replace(omdbRegex, '')
    .replace(underscoreRegex, ' ')
    .replace(dotRegex, ' ')
    .replace(bracketRegex, ' ')
    .replace(/\.?([A-Z]+)/g, (match, group) => ` ${group}`)
    .replace(/^_/, '');

  // return `${parsed} (${stat.key})`;
  return parsed;
};
