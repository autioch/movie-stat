/* eslint no-magic-numbers: 0 */
const scrollSize = 50;

module.exports = {
  chartHeight: 100,
  offsetTop: 5.5,
  half: 0.5,
  canvasWidth: window.innerWidth - scrollSize,
  maxBarWidth: 100,
  minBarWidth: 16,
  barSpace: 1,
  labelMargin: 2,
  helpersCount: 4,
  fontSize: 14,
  axisColor: '#aaa',
  helperAxisColor: '#eee',
  labelColor: '#444',
  serieColors: [
    '#f3f', '#ff3', '#3ff',
    '#f39', '#f93', '#3f9',
    '#93f', '#9f3', '#39f'
  ]
};
