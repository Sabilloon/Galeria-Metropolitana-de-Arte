window.addEventListener('load', () => {
    const images = document.querySelectorAll('.slideshow img');

    // Función para cambiar la imagen
    function changeImage() {
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

        // Mostrar la primera imagen
        showImage();

        // Cambiar la imagen cada 3 segundos
        setInterval(showImage, 5000);
    }

    // Llamar a la función para iniciar el cambio de imágenes
    changeImage();
});
