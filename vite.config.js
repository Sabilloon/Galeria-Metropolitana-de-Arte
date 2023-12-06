import { defineConfig } from 'vite';
import path, { resolve } from 'node:path';
import fs from 'node:fs';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: "/galeriadearte/",
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        fs.readdirSync('./handles').filter((file) => file.endsWith('.hbs')).map((file) => [
          file.slice(0, file.length - path.extname(file).length),
          resolve(process.cwd(), 'handles', file),
        ])
      ),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      
    }),
    htmlPurge({}),
    ViteMinifyPlugin({}),
  ],
});
