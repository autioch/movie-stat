const dotRegex = /\./g;

module.exports = function parseHeader(stat) {
  const parsed = stat.key

    // .replace(/\.?([A-Z]+)/g, (match, group) => ` ${group}`)
    .replace(dotRegex, ' ')
    .replace(/^_/, '');

  return `${parsed} (${stat.key})`;
};
