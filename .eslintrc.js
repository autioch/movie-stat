module.exports = {
  extends: [
    './tools/eslint/enviroment',
    './tools/eslint/best-practices',
    './tools/eslint/common-js',
    './tools/eslint/es6',
    './tools/eslint/possible-errors',
    './tools/eslint/strict-mode',
    './tools/eslint/stylistic-issues',
    './tools/eslint/variables'
  ].map(require.resolve),
  rules : {
    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 1
        // multiline: true
      },
      ObjectPattern: {
        multiline: true
      }
    }]
  }
};
