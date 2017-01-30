const dotRegex = /\./g;
const bracketRegex = /\[]/g;

require('./style');

function parseHeader(text) {
  // alert(s.replace(/\.?([A-Z]+)/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, ""));
  return text
    .replace(dotRegex, ' ')
    .replace(bracketRegex, '')
    .replace('ffmpeg', '')
    .replace('omdb', '')
    .replace(/\.?([A-Z]+)/g, (x, y) => ` ${y}`)
    .replace(/^_/, '');
}

module.exports = function description(stat) {
  const header = document.createElement('h3');

  const details = document.createElement('div');

  details.className = 'description__container';

  [
    'count', 'total variety', 'min', 'weighted',
    'average', 'variety', 'max', 'sum'
  ]
    .filter((detail) => stat[detail] !== undefined)
    .forEach((detail) => {
      const el = document.createElement('div');
      const label = document.createElement('div');
      const value = document.createElement('div');

      el.className = 'decription__detail';
      label.className = 'decription__label';
      value.className = 'decription__value';
      label.textContent = detail;
      value.textContent = stat[detail] === null ? 'N/A' : stat[detail];
      el.appendChild(label);
      el.appendChild(value);
      details.appendChild(el);
    });

  header.textContent = parseHeader(stat.key);

  document.body.appendChild(header);
  document.body.appendChild(details);
};
