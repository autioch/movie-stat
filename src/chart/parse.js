const singles = 1;
const tens = 10;
const hundreds = 100;
const thousands = 1000;

const defaultHelpersCount = 5;

const rounding = {
  '1': singles,
  '2': tens,
  '3': hundreds,
  '4': hundreds,
  '5': thousands,
  '6': thousands
};

function getYValues(maxValue) {
  const valueCount = maxValue > defaultHelpersCount ? defaultHelpersCount : maxValue;
  const values = [maxValue];

  for (let index = 1; index < valueCount; index++) {
    values.push(Math.ceil(maxValue / valueCount * (valueCount - index)));
  }

  return values;
}

function getMax(dict) {
  const maxValue = Math.ceil(Math.max(...Object.keys(dict).map((key) => dict[key])));

  const orderOfMagnitue = maxValue.toString().length;
  const roundingAmount = rounding[orderOfMagnitue];

  if (roundingAmount) {
    return Math.ceil(maxValue / roundingAmount) * roundingAmount;
  }

  return roundingAmount;
}

module.exports = function parse(stat) {
  const maxValue = getMax(stat.dict);
  const labels = Object.keys(stat.dict);

  const series = labels.map((label, index) => ({
    index,
    label,
    value: stat.dict[label]
  }));

  return {
    variety: stat.variety,
    intermediateValues: getYValues(maxValue),
    maxValue,
    series,
    labels
  };
};
