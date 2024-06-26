import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        blog: './blog.html',
        contactenos: './contactenos.html',
        donaciones: './donaciones.html',
        eventos: './eventos.html',
        galeria: './galeria.html',
        programas: './programas.html',
        faq: './faq.html',
        articulo1: './articulo1.html',
        articulo2: './articulo2.html'
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    })
  ]
});
