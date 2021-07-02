module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'accessor-pairs': 'off',
    'no-negated-in-lhs': 'off',
    'vue/custom-event-name-casing': 'off',
    'object-property-newline': 'off'
  }
}
