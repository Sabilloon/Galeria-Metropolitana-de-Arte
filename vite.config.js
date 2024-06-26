import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';  // Añadimos esta línea

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        contactenos: resolve(__dirname, 'contactenos.html'),
        donaciones: resolve(__dirname, 'donaciones.html'),
        eventos: resolve(__dirname, 'eventos.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        programas: resolve(__dirname, 'programas.html'),
        faq: resolve(__dirname, 'faq.html'),
        articulo1: resolve(__dirname, 'articulo1.html'),
        articulo2: resolve(__dirname, 'articulo2.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    })
  ]
});
