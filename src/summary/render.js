const tag = require('lean-tag');

require('./style');

module.exports = function description(stat) {
  return tag('section.stat-summary', stat.summary.map((detail) => tag('.stat-summary-item', [
    tag('.stat-summary-item__label', detail.label),
    tag('.stat-summary-item__value', detail.value)
  ])));
};
