window.addEventListener('load', () => {
    const images = document.querySelectorAll('.slideshow img');
    let index = 0;

    // Función para mostrar la imagen actual
    function showImage() {
        // Ocultar todas las imágenes
        images.forEach(image => {
            image.style.opacity = '0';
        });

        // Mostrar la imagen actual
        images[index].style.opacity = '1';

        // Avanzar al índice de la siguiente imagen
        index = (index + 1) % images.length;
    }

    // Mostrar la primera imagen inmediatamente
    showImage();

    // Cambiar la imagen cada 5 segundos
    setInterval(showImage, 5000);
});
