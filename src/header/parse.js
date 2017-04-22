const dotRegex = /\./g;

module.exports = function parseHeader(stat) {
  return stat.key

    // .replace(/\.?([A-Z]+)/g, (match, group) => ` ${group}`)
    .replace(dotRegex, ' ')
    .replace(/^_/, '');
};
