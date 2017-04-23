const stats = require('./stat.json');
const parse = require('./parse');
const render = require('./render');

require('./style');

document.body.appendChild(render(parse(stats)));
