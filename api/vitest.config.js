import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        alias: {
            // eslint-disable-next-line no-undef
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
