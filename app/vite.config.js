import { defineConfig } from 'vite';
import path from 'path';

// Plugins
import vueDevTools from 'vite-plugin-vue-devtools';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        vueDevTools({
            launchEditor: 'phpstorm',
        }),
        eslint({
            fix: true,
        }),
        stylelintPlugin({
            exclude: /node_modules/,
            fix: true,
        }),
    ],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@mixins': path.resolve(__dirname, './src/mixins'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@plugins': path.resolve(__dirname, './src/plugins'),
            '@services': path.resolve(__dirname, './src/services'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@composables': path.resolve(__dirname, './src/composables'),
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@store': path.resolve(__dirname, './src/store'),
        },
        extensions: ['.vue', '.js', '.css', '.scss'],
    },
    test: {
        alias: {
            '@root': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@styles': path.resolve(__dirname, './src/styles'),
        },
        reporters: [],
        coverage: {
            reporter: [],
        },
        environment: 'jsdom',
        globals: true,
    },
});
