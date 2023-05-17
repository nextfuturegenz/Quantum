import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import { existsSync } from 'fs';
import * as dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@@': path.resolve(__dirname),
      '@': path.resolve(__dirname, 'src')
    }
  },
  // server: {
  //   cors: true,
  //   port: process.env.VITE_PORT as unknown as number,
  //   hmr: {
  //     host: 'localhost',
  //     protocol: 'http',
  //     port: process.env.VITE_PORT as unknown as number
  //   }
  // }
})
