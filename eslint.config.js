import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

/** 单文件行数上限：超过即视为需要拆分 */
const MAX_LINES = 300;

export default tseslint.config(
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'public/**', 'src/content/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs,ts,tsx,astro}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // 项目规范：单文件不超过 300 行（不含空行与注释，避免逼着删注释）
      'max-lines': [
        'error',
        { max: MAX_LINES, skipBlankLines: true, skipComments: true },
      ],
      // 单个函数同样保持精简，便于阅读与复用
      'max-lines-per-function': [
        'warn',
        { max: 120, skipBlankLines: true, skipComments: true },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  },
  {
    // 国际化词条文件本身就是纯数据，仍遵守 300 行上限，但不限制单个对象体量
    files: ['src/i18n/locales/*.ts'],
    rules: { 'max-lines-per-function': 'off' },
  },
  {
    // Astro 官方模板要求的类型引用写法
    files: ['src/env.d.ts'],
    rules: { '@typescript-eslint/triple-slash-reference': 'off' },
  },
  {
    // Node 命令行脚本允许输出到控制台
    files: ['scripts/**/*.mjs'],
    rules: { 'no-console': 'off' },
  },
);
