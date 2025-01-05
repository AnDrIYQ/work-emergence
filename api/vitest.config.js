import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
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
