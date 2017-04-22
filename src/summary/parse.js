const details = ['count', 'total variety', 'min', 'weighted', 'average', 'variety', 'max', 'sum'];

module.exports = function parse(stat) {
  return details
    .filter((detail) => stat[detail] !== undefined)
    .map((detail) => ({
      label: detail,
      value: stat[detail]
    }));
};
