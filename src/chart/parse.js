const { minBarWidth, canvasWidth, helpersCount } = require('./drawGraph/config');
const singles = 1;
const tens = 10;
const hundreds = 100;
const thousands = 1000;

const defaultLabelWidth = 50;

const rounding = {
  '1': singles,
  '2': tens,
  '3': hundreds,
  '4': hundreds,
  '5': thousands,
  '6': thousands
};

function siftSeries(series) {
  const maxSeries = (canvasWidth - defaultLabelWidth) / minBarWidth;
  let siftedSeries = series;

  siftedSeries.forEach((serie, index) => {
    serie.index = index;
  });

  if (series.length > maxSeries) {
    siftedSeries = siftedSeries
      .sort((serieA, serieB) => serieB.value - serieA.value)
      .slice(0, maxSeries)
      .sort((serieA, serieB) => serieA.index - serieB.index);
  }

  siftedSeries.forEach((serie, index) => {
    serie.index = index;
  });

  return siftedSeries;
}

function getYValues(maxValue) {
  const valueCount = maxValue > helpersCount ? helpersCount : maxValue;
  const values = [maxValue];

  for (let index = 1; index < valueCount; index++) {
    values.push(Math.ceil(maxValue / valueCount * (valueCount - index)));
  }

  return values;
}

function getMax(series) {
  const maxValue = Math.ceil(Math.max(...series.map((serie) => serie.value)));

  const orderOfMagnitue = maxValue.toString().length;
  const roundingAmount = rounding[orderOfMagnitue];

  if (roundingAmount) {
    return Math.ceil(maxValue / roundingAmount) * roundingAmount;
  }

  return roundingAmount;
}

module.exports = function parse(stat) {
  const maxValue = getMax(stat.series);
  const siftedSeries = siftSeries(stat.series);

  return {
    intermediateValues: getYValues(maxValue),
    maxValue,
    series: siftedSeries,
    labels: siftedSeries.map((serie) => serie.label)
  };
};
