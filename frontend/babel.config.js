'use strict';

module.exports = api => {
    api.cache(true);

    const presets = ['@babel/env', '@babel/react', '@babel/preset-typescript'];
    const plugins = [
        ['@babel/plugin-proposal-class-properties'],
        ['tsconfig-paths-module-resolver'],
        [
            'auto-import',
            {
                declarations: [
                    {
                        default: 'React',
                        path: 'react',
                    },
                ],
            },
        ],
        [
            'inline-dotenv',
            {
                path: '.env',
            },
        ],
    ];

    return {
        presets,
        plugins,
    };
};
