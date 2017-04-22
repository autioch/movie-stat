module.exports = {
  extends: 'qb',
  rules: {
    'no-undefined': ['off'],
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
  }
};
