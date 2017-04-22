const tag = require('lean-tag');

require('./style');

module.exports = function renderHeader(stat) {
  return tag('header.stat-header', stat.header);
};
