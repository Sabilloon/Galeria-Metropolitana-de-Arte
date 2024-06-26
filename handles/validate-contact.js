document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let valid = true;
    let errorMessage = '';

    // Validar el nombre
    const nombrePattern = /^[a-zA-Z\s]+$/;
    if (nombre === '') {
        valid = false;
        errorMessage += 'El nombre es obligatorio.\n';
    } else if (!nombrePattern.test(nombre)) {
        valid = false;
        errorMessage += 'El nombre solo puede contener letras y espacios.\n';
    }

    // Validar el email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        valid = false;
        errorMessage += 'El correo electrónico es obligatorio.\n';
    } else if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'El correo electrónico no es válido.\n';
    }

    // Validar el mensaje
    if (mensaje === '') {
        valid = false;
        errorMessage += 'El mensaje es obligatorio.\n';
    }

    // Mostrar errores o enviar el formulario
    if (!valid) {
        alert(errorMessage);
    } else {
        document.getElementById('confirmationMessage').style.display = 'block';
    }
});
