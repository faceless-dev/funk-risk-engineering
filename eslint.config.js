import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
    // Next.js recommended config
    ...compat.extends('next/core-web-vitals'),
    
    // Apply to all JS/TS files
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        ignores: ['node_modules/**', '.next/**', 'public/**', 'types/**', '.husky/**', '.vscode/**', 'package.json', 'package-lock.json'],
        languageOptions: {
            ecmaVersion: 2021,
            globals: {
                Buffer: 'readonly',
                HTMLAnchorElement: 'readonly',
                HTMLButtonElement: 'readonly',
                HTMLDivElement: 'readonly',
                // DOM globals
                HTMLElement: 'readonly',
                HTMLHeadingElement: 'readonly',
                HTMLInputElement: 'readonly',
                HTMLLIElement: 'readonly',
                HTMLOListElement: 'readonly',
                HTMLParagraphElement: 'readonly',
                HTMLSpanElement: 'readonly',
                HTMLTableCaptionElement: 'readonly',
                HTMLTableCellElement: 'readonly',
                HTMLTableElement: 'readonly',
                HTMLTableRowElement: 'readonly',
                HTMLTableSectionElement: 'readonly',
                HTMLTextAreaElement: 'readonly',
                HTMLUListElement: 'readonly',
                KeyboardEvent: 'readonly',
                React: 'readonly',

                __dirname: 'readonly',

                __filename: 'readonly',

                alert: 'readonly',

                clearInterval: 'readonly',

                clearTimeout: 'readonly',

                console: 'readonly',

                document: 'readonly',
                exports: 'readonly',
                global: 'readonly',
                module: 'readonly', // Browser globals
                window: 'readonly', // Node globals
                process: 'readonly',
                require: 'readonly',

                setInterval: 'readonly',
                setTimeout: 'readonly',
            },
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': typescript,
            'no-unsanitized': noUnsanitized,
            react: react,
            'react-hooks': reactHooks,
            'sort-destructure-keys': sortDestructureKeys,
            'sort-keys-fix': sortKeysFix,
            'typescript-sort-keys': typescriptSortKeys,
            'unused-imports': unusedImports,
        },
        rules: {
            // Base JS recommended rules
            ...js.configs.recommended.rules,
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            // TypeScript rules
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-duplicate-imports': 'error', // Security rules
            'no-unsanitized/method': 'error',
            'no-unsanitized/property': 'error',
            // General JS rules
            'prefer-template': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error', // React rules
            'react/display-name': 'off',
            'react/jsx-curly-brace-presence': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-undef': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: true,
                    ignoreCase: true,
                    reservedFirst: true,
                    shorthandFirst: true,
                },
            ],
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/no-danger': 'error',
            'react/no-multi-comp': 'warn',
            'react/prop-types': 'off',
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],
            'sort-destructure-keys/sort-destructure-keys': [
                'error',
                {
                    caseSensitive: false,
                },
            ],
            'sort-keys-fix/sort-keys-fix': 'error',
            // Sorting rules
            'typescript-sort-keys/interface': 'error',
            'typescript-sort-keys/string-enum': 'error',
            // Import rules
            'unused-imports/no-unused-imports': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }, // TypeScript-specific overrides
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    }, // Prettier config (disables conflicting rules)
    prettierConfig,
];
