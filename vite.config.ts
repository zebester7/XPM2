import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      appType: 'spa',
      server: {
        port: 3000,
        host: '0.0.0.0',
        middlewareMode: false,
        historyApiFallback: true,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        target: 'esnext',
        minify: 'terser',
        cssCodeSplit: true,
        sourcemap: false,
        outDir: 'dist',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor': ['react', 'react-dom', 'react-router-dom'],
              'quran-pages': [
                './pages/QuranBeginnerPage.tsx',
                './pages/QuranIntermediatePage.tsx',
                './pages/QuranAdvancedPage.tsx',
                './pages/QuranExpertPage.tsx'
              ],
              'services': [
                './pages/IRServicesPage.tsx',
                './pages/HireTeacherPage.tsx'
              ]
            }
          }
        }
      }
    };
});
