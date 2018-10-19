const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  root: true, // stop ESLint from looking for a configuration file in parent folders

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
    // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
    'no-cond-assign': WARN,
    'no-console': ERROR,
    'no-constant-condition': [WARN, {checkLoops: false}],
    'no-control-regex': WARN,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': WARN,
    'no-empty': [WARN, {allowEmptyCatch: true}],
    'no-empty-character-class': WARN,
    'no-ex-assign': WARN,
    'no-extra-boolean-cast': WARN,
    'no-extra-parens': OFF,
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': WARN,
    'no-invalid-regexp': WARN,
    'no-irregular-whitespace': WARN,
    'no-obj-calls': ERROR,
    'no-prototype-builtins': OFF,
    'no-regex-spaces': WARN,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': OFF,
    'no-unexpected-multiline': WARN,
    'no-unreachable': ERROR,
    'no-unsafe-finally': WARN,
    'no-unsafe-negation': ERROR,
    'use-isnan': ERROR,
    'valid-jsdoc': OFF,
    'valid-typeof': ERROR,

    // Best Practices (http://eslint.org/docs/rules/#best-practices)
    'accessor-pairs': [WARN, {setWithoutGet: true}],
    'array-callback-return': OFF,
    'block-scoped-var': OFF,
    'class-methods-use-this': OFF,
    complexity: OFF,
    'consistent-return': WARN,
    curly: WARN,
    'default-case': OFF,
    'dot-location': [WARN, 'property'],
    'dot-notation': WARN,
    eqeqeq: [WARN, 'allow-null'],
    'guard-for-in': OFF,
    'no-alert': WARN,
    'no-await-in-loop': WARN,
    'no-caller': ERROR,
    'no-case-declarations': WARN,
    'no-div-regex': WARN,
    'no-else-return': OFF,
    'no-empty-function': OFF,
    'no-empty-pattern': WARN,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-extend-native': WARN,
    'no-extra-bind': WARN,
    'no-extra-label': WARN,
    'no-fallthrough': WARN,
    'no-floating-decimal': ERROR,
    'no-global-assign': [ERROR, {exceptions: ['Map', 'Set']}],
    'no-implicit-coercion': OFF,
    'no-implicit-globals': OFF,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-iterator': WARN,
    'no-labels': [ERROR, {allowLoop: true, allowSwitch: true}],
    'no-lone-blocks': WARN,
    'no-loop-func': OFF,
    'no-magic-numbers': OFF,
    'no-multi-spaces': [WARN, {exceptions: {Property: true}}],
    'no-multi-str': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': WARN,
    'no-new': WARN,
    'no-octal': WARN,
    'no-octal-escape': WARN,
    'no-param-reassign': WARN,
    'no-proto': ERROR,
    'no-redeclare': [WARN, {builtinGlobals: true}],
    'no-restricted-properties': OFF,
    'no-return-assign': WARN,
    'no-return-await': OFF,
    'no-script-url': ERROR,
    'no-self-assign': WARN,
    'no-self-compare': WARN,
    'no-sequences': WARN,
    'no-throw-literal': WARN,
    'no-unmodified-loop-condition': OFF,
    'no-unused-expressions': OFF, // allowShortCircuit?
    'no-unused-labels': WARN,
    'no-useless-call': WARN,
    'no-useless-concat': WARN,
    'no-useless-escape': WARN,
    'no-useless-return': WARN,
    'no-void': WARN,
    'no-warning-comments': OFF,
    'no-with': WARN,
    radix: WARN,
    'require-await': WARN,
    'vars-on-top': OFF,
    'wrap-iife': [WARN, 'inside'],
    yoda: WARN,

    // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
    strict: WARN,

    // Variables (http://eslint.org/docs/rules/#variables)
    'init-declarations': OFF,
    'no-catch-shadow': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': WARN,
    'no-restricted-globals': OFF,
    'no-shadow-restricted-names': WARN,
    'no-shadow': WARN,
    'no-undef-init': OFF,
    'no-undef': ERROR,
    'no-undefined': OFF,
    'no-unused-vars': [WARN, {args: 'none'}],
    'no-use-before-define': OFF,

    // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
    'callback-return': OFF,
    'global-require': OFF,
    'handle-callback-err': WARN,
    'no-mixed-requires': OFF,
    'no-new-require': WARN,
    'no-path-concat': WARN,
    'no-process-env': OFF,
    'no-process-exit': OFF,
    'no-restricted-modules': OFF,
    'no-sync': OFF,

    // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
    'array-bracket-spacing': WARN,
    'block-spacing': WARN,
    'brace-style': [WARN, '1tbs', {allowSingleLine: true}],
    camelcase: [WARN, {properties: 'always'}],
    'capitalized-comments': OFF,
    'comma-dangle': [
      WARN,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': WARN,
    'comma-style': WARN,
    'computed-property-spacing': WARN,
    'consistent-this': OFF,
    'eol-last': WARN,
    'func-call-spacing': WARN,
    'func-name-matching': OFF,
    'func-names': OFF,
    'func-style': OFF,
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    indent: [WARN, 2, {SwitchCase: 1}],
    'jsx-quotes': [WARN, 'prefer-double'],
    'key-spacing': [WARN, {beforeColon: false, afterColon: true}],
    'keyword-spacing': WARN,
    'line-comment-position': OFF,
    'linebreak-style': WARN,
    'lines-around-comment': OFF,
    'lines-around-directive': OFF,
    'max-depth': OFF,
    'max-len': [WARN, 100, {tabWidth: ERROR, ignoreUrls: true, ignoreComments: true}],
    'max-lines': OFF,
    'max-nested-callbacks': OFF,
    'max-params': OFF,
    'max-statements': OFF,
    'max-statements-per-line': OFF,
    'multiline-ternary': OFF,
    'new-cap': OFF,
    'new-parens': ERROR,
    'newline-after-var': OFF,
    'newline-before-return': OFF,
    'newline-per-chained-call': OFF,
    'no-array-constructor': WARN,
    'no-bitwise': WARN,
    'no-continue': OFF,
    'no-inline-comments': OFF,
    'no-lonely-if': OFF,
    'no-mixed-operators': OFF,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multiple-empty-lines': [WARN, {max: ERROR, maxBOF: OFF, maxEOF: 1}],
    'no-negated-condition': OFF,
    'no-nested-ternary': OFF,
    'no-new-object': WARN,
    'no-plusplus': OFF,
    'no-restricted-syntax': OFF,
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': WARN,
    'no-underscore-dangle': OFF,
    'no-unneeded-ternary': WARN,
    'no-whitespace-before-property': WARN,
    'object-curly-newline': OFF,
    'object-curly-spacing': ERROR,
    'object-property-newline': OFF,
    'one-var-declaration-per-line': OFF,
    'one-var': [WARN, {initialized: 'never'}],
    'operator-assignment': WARN,
    'operator-linebreak': OFF,
    'padded-blocks': OFF,
    'quote-props': [WARN, 'as-needed'],
    quotes: [WARN, 'single', 'avoid-escape'],
    'require-jsdoc': OFF,
    'semi-spacing': ERROR,
    semi: ERROR,
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-before-blocks': WARN,
    'space-before-function-paren': [
      WARN,
      {anonymous: 'never', named: 'never', asyncArrow: 'always'},
    ],
    'space-in-parens': [WARN, 'never'],
    'space-infix-ops': [WARN, {int32Hint: true}],
    'space-unary-ops': [WARN, {words: true, nonwords: false}],
    'spaced-comment': [
      ERROR,
      'always',
      {
        block: {
          balanced: true,
          markers: [':'], // flow
        },
      },
    ],
    'unicode-bom': [WARN, 'never'],
    'wrap-regex': OFF,

    // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
    'arrow-body-style': OFF,
    'arrow-parens': [WARN, 'as-needed'],
    'arrow-spacing': WARN,
    'constructor-super': ERROR,
    'generator-star-spacing': WARN,
    'no-class-assign': WARN,
    'no-confusing-arrow': [WARN, {allowParens: true}],
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': WARN,
    'no-new-symbol': WARN,
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
    'no-this-before-super': ERROR,
    'no-useless-computed-key': WARN,
    'no-useless-constructor': WARN,
    'no-var': WARN,
    'no-useless-rename': WARN,
    'object-shorthand': WARN,
    'prefer-arrow-callback': [WARN, {allowNamedFunctions: true}],
    'prefer-const': [WARN, {destructuring: 'all'}],
    'prefer-numeric-literals': OFF,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': OFF,
    'require-yield': OFF,
    'rest-spread-spacing': WARN,
    'sort-imports': OFF,
    'symbol-description': WARN,
    'template-curly-spacing': WARN,
    'yield-star-spacing': WARN,

    // Babel (https://github.com/babel/eslint-plugin-babel)
    'babel/new-cap': OFF,
    'babel/object-curly-spacing': OFF,
    'babel/no-invalid-this': OFF,
    'babel/no-await-in-loop': OFF, // deprecated; now using 'no-await-in-loop' from eslint core

    // flowtype (https://github.com/gajus/eslint-plugin-flowtype)
    'flowtype/boolean-style': WARN,
    'flowtype/define-flow-type': WARN,
    'flowtype/delimiter-dangle': [WARN, 'always-multiline'],
    'flowtype/generic-spacing': WARN,
    'flowtype/no-dupe-keys': WARN,
    'flowtype/no-primitive-constructor-types': WARN,
    'flowtype/no-weak-types': OFF,
    'flowtype/object-type-delimiter': WARN,
    'flowtype/require-parameter-type': OFF,
    'flowtype/require-return-type': OFF,
    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
    'flowtype/require-variable-type': OFF,
    'flowtype/semi': ERROR,
    'flowtype/sort-keys': OFF,
    'flowtype/space-after-type-colon': [WARN, 'always'],
    'flowtype/space-before-generic-bracket': WARN,
    'flowtype/space-before-type-colon': WARN,
    'flowtype/type-id-match': OFF,
    'flowtype/union-intersection-spacing': WARN,
    'flowtype/use-flow-type': WARN,
    'flowtype/valid-syntax': OFF,

    // Jasmine (https://github.com/tlvince/eslint-plugin-jasmine)
    'jasmine/missing-expect': OFF,
    'jasmine/named-spy': OFF,
    'jasmine/no-assign-spyon': OFF,
    'jasmine/no-disabled-tests': WARN,
    'jasmine/no-focused-tests': ERROR,
    'jasmine/no-spec-dupes': [WARN, 'branch'],
    'jasmine/no-suite-callback-args': OFF,
    'jasmine/no-suite-dupes': [WARN, 'branch'],
    'jasmine/no-unsafe-spy': WARN,
    'jasmine/no-global-setup': WARN,
    'jasmine/valid-expect': OFF,

    // prefer-object-spread (https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread)
    'prefer-object-spread/prefer-object-spread': WARN,

    // React (https://github.com/yannickcr/eslint-plugin-react)
    'react/display-name': OFF,
    'react/forbid-component-props': OFF,
    'react/forbid-prop-types': OFF,
    'react/no-access-state-in-setstate': ERROR,
    'react/no-children-prop': OFF,
    'react/no-danger': OFF,
    'react/no-danger-with-children': OFF,
    'react/no-deprecated': WARN,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': OFF,
    'react/no-direct-mutation-state': WARN,
    'react/no-find-dom-node': OFF,
    'react/no-is-mounted': WARN,
    'react/no-multi-comp': OFF,
    'react/no-render-return-value': OFF,
    'react/no-set-state': OFF,
    'react/no-string-refs': OFF,
    'react/no-unescaped-entities': OFF,
    'react/no-unknown-property': WARN,
    'react/no-unused-prop-types': OFF,
    'react/prefer-es6-class': OFF,
    'react/prefer-stateless-function': OFF,
    'react/prop-types': OFF, // we use Flow instead,
    'react/react-in-jsx-scope': WARN,
    'react/require-optimization': OFF,
    'react/require-render-return': OFF,
    'react/self-closing-comp': WARN,
    'react/sort-comp': OFF,
    'react/sort-prop-types': OFF,
    'react/style-prop-object': OFF,
    'react/jsx-boolean-value': OFF,
    'react/jsx-closing-bracket-location': [
      WARN,
      {selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'},
    ],
    'react/jsx-curly-spacing': [WARN, 'never'],
    'react/jsx-equals-spacing': [WARN, 'never'],
    'react/jsx-filename-extension': OFF,
    'react/jsx-first-prop-new-line': OFF,
    'react/jsx-handler-names': OFF,
    'react/jsx-indent': [WARN, 2],
    'react/jsx-indent-props': [WARN, 2],
    'react/jsx-key': WARN,
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-no-bind': ERROR,
    'react/jsx-no-comment-textnodes': WARN,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-target-blank': OFF,
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-tag-spacing': [WARN, {beforeSelfClosing: 'always'}],
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/jsx-wrap-multilines': WARN,

    // React Native (https://github.com/Intellicode/eslint-plugin-react-native)
    'react-native/no-unused-styles': ERROR,

    // Relay (https://github.com/relayjs/eslint-plugin-relay)
    'relay/unused-fields': ERROR,

    // import (https://github.com/benmosher/eslint-plugin-import)
    'import/order': [
      ERROR,
      {
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-useless-path-segments': ERROR,

    // dependencies (https://github.com/zertosh/eslint-plugin-dependencies)
    'dependencies/case-sensitive': ERROR,
    'dependencies/no-cycles': ERROR,
    'dependencies/no-unresolved': ERROR,
    'dependencies/require-json-ext': ERROR,
  },

  plugins: [
    'babel',
    'flowtype',
    'jasmine',
    'prefer-object-spread',
    'react',
    'react-native',
    'relay',
    'import',
    'dependencies',
  ],
};
