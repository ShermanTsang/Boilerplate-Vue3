module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // 自己写一些想配置的规则
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'generator-star-spacing': 'off',
        'vue/no-v-html': 'off',
        quotes: [1, 'single'],
        'object-curly-newline': 'off',
        'no-void': 'off',
        camelcase: 'off',
        'vue/comment-directive': 'off',
        'vue/html-self-closing': ['error', {
          html: {
            void: 'never',
            normal: 'any',
            component: 'any',
          },
          svg: 'always',
          math: 'always',
        }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['/@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
};
