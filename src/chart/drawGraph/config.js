/* eslint no-magic-numbers: 0 */
const scrollSize = 50;

let canvasWidth = window.innerWidth - scrollSize;

if (canvasWidth > 959) {
  canvasWidth = Math.floor(canvasWidth / 2);
}

module.exports = {
  chartHeight: 100,
  offsetTop: 5.5,
  half: 0.5,
  canvasWidth,
  maxBarWidth: 50,
  minBarWidth: 16,
  barSpace: 1,
  labelMargin: 2,
  helpersCount: 4,
  fontSize: 14,
  axisColor: '#aaa',
  helperAxisColor: '#eee',
  labelColor: '#999',
  valueColor: '#222',
  serieColors: [
    '#f3f', '#ff3', '#3ff',
    '#f39', '#f93', '#3f9',
    '#93f', '#9f3', '#39f'
  ]
};
