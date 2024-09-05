import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@api': path.resolve(__dirname, './src/shared/api'),
            '@types': path.resolve(__dirname, './src/shared/types'),
            '@hooks': path.resolve(__dirname, './src/shared/hooks'),
            '@utils': path.resolve(__dirname, './src/shared/utils'),
            '@routes': path.resolve(__dirname, './src/shared/routes'),
            '@components': path.resolve(__dirname, './src/shared/components'),
            '@constants': path.resolve(__dirname, './src/shared/constants'),
            '@features': path.resolve(__dirname, './src/shared/features'),
            '@pages': path.resolve(__dirname, './src/shared/pages'),
            '@store': path.resolve(__dirname, './src/shared/store'),
            '@question': path.resolve(__dirname, './src/modules/question'),
            '@onboarding': path.resolve(__dirname, './src/modules/onboarding'),
        },
    },
});
