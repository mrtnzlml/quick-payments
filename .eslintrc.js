const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true, // stop ESLint from looking for a configuration file in parent folders
  extends: ['@kiwicom/eslint-config'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    es6: true,
    jest: true,
    node: true,
  },

  // set each global variable name equal to true to allow the variable to be overwritten or
  // false to disallow overwriting
  globals: {
    fetch: false, // already by default in RN
    FormData: false, // already by default in RN
    __DEV__: false, // already by default in RN
  },

  rules: {
    // I am experimenting with new way how to import stuff which requires to access things
    // from workspaces deeply.
    'monorepo/no-internal-import': OFF,

    // Styles in this repository are slightly different from `@kiwicom/eslint-config`
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxBracketSameLine: false,
      },
    ],

    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'react-native',
            importNames: [
              'Dimensions', // Dimensions
              'Text', // Text
              'TouchableOpacity', // Touchable
              'TouchableNativeFeedback', // Touchable
              'StyleSheet', // StyleSheet
            ],
            message: "Please use '_shared' package instead.",
          },
        ],
      },
    ],
  },
};
