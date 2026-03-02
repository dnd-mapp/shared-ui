// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    { ignores: ['.angular/', 'dist/', '**/node_modules/', 'eslint.config.mjs'] },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/stories/**/*.ts', '**/.storybook/**/*.ts'],
        extends: [storybook.configs['flat/recommended']],
    },
    {
        files: ['**/*.ts'],
        processor: angular.processInlineTemplates,
        extends: [angular.configs.tsRecommended],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'dma',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'dma',
                    style: 'kebab-case',
                },
            ],
            '@typescript-eslint/unbound-method': 'off',
        },
    },
    {
        files: ['**/*.html', '**/*.ts/*.html'],
        extends: [
            tseslint.configs.disableTypeChecked,
            angular.configs.templateRecommended,
            angular.configs.templateAccessibility,
        ],
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/adjacent-overload-signatures': 'off',
        },
    },
    eslintConfigPrettier,
]);
