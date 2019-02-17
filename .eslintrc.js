module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'valid-jsdoc': 2,
        'eqeqeq': [2, 'allow-null' ],
        'no-self-compare': 2,
        'no-catch-shadow': 2,
        // 'eol-last': ['error', 'never'],
        'indent': 2,  // This actually means "warning = 1, error = 2". Enforce 4 space indentation.
        'key-spacing': [2, { 'afterColon': true }],
        'padding-line-between-statements': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, { 'max': 2 }],
        'object-curly-spacing': [2, 'always',{ 'arraysInObjects': true, 'objectsInObjects': true }],
        'semi': [2,'always'],
        'space-before-function-paren': 2,
        'spaced-comment': [2, 'always' , {}],
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        'constructor-super': 2,
        'no-const-assign': 2,
        'no-var': 2,
        'prefer-const': 2,

        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
};