import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            VITE_BASE_API_URL: String(env.VITE_BASE_API_URL),
        },
        plugins: [react()],
    }
});
