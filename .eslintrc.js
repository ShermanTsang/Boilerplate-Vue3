/** @format */

module.exports = {
    parser: 'vue-eslint-parser' /* 指定如何解析语法*/,
    extends: ['plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        parser: '@typescript-eslint/parser' /* 解析ts语法 */,
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {},
        },
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [['/@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
            },
        },
    },
    env: {
        browser: true,
        node: true,
    },
}
