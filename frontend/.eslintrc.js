module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'xo',
        'plugin:security/recommended',
        'plugin:unicorn/recommended',
        'plugin:import/typescript',
    ],
    overrides: [
        {
            extends: ['xo-typescript'],
            files: ['*.ts', '*.tsx'],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
        tsconfigRootDir: './',
    },
    plugins: ['@typescript-eslint', 'security', 'unicorn', '@babel', 'react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'max-classes-per-file': 'off',
        'max-len': [
            'error',
            {
                code: 80,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
            },
        ],
        'unicorn/prefer-module': 'off',
        'no-mixed-spaces-and-tabs': 'off',
    },
};
