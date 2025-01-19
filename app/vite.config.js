import { defineConfig } from 'vite';
import path from 'path';

// Plugins
import vueDevTools from 'vite-plugin-vue-devtools';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools({
            launchEditor: 'phpstorm',
        }),
        eslint({
            fix: true,
        }),
        stylelintPlugin({
            exclude: /node_modules/,
        }),
    ],
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, './src')
        },
        extensions: ['.vue', '.js', '.css', '.scss'],
    },
    test: {
        alias: {
            '@root': path.resolve(__dirname, './src'),
        },
        reporters: [],
        coverage: {
            reporter: [],
        },
        environment: 'node',
        globals: true,
    },
});
