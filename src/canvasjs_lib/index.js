const CanvasJS = require('babel-loader!canvasjs');

require('./style');

module.exports = function canvasjs(stat) {
  const div = document.createElement('div');
  const id = `chart__${stat.key}`;

  div.id = id;
  div.style.width = `${window.innerWidth - 40}px`;
  div.style.height = '300px';
  document.body.appendChild(div);

  const chart = new CanvasJS.Chart(id, {
    data: [
      {
        type: 'column',
        dataPoints: Object.keys(stat.dict).map((key) => ({
          label: key,
          indexLabel: stat.dict[key].toString(),
          y: stat.dict[key]
        }))
      }
    ]
  });

  chart.render();
};
