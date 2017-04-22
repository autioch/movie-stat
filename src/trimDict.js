const minBarWidth = 40;
const space = 100;

module.exports = function trimDict(stat) {
  const maxVariety = (window.innerWidth - space) / minBarWidth;
  const { variety, dict } = stat;

  if (variety <= maxVariety) {
    return stat;
  }

  const viableKeys = Object
    .keys(dict)
    .sort((keyA, keyB) => {
      if (dict[keyA] > dict[keyB]) {
        return -1;
      }
      if (dict[keyA] < dict[keyB]) {
        return 1;
      }

      return 0;
    })
    .slice(0, maxVariety)
    .sort();

  stat['total variety'] = stat.variety;
  stat.variety = viableKeys.length;

  stat.dict = viableKeys.reduce((newDict, key) => {
    newDict[key] = dict[key];

    return newDict;
  }, {});

  return stat;
};
