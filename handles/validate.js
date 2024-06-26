document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const metodo = document.getElementById('metodo').value;
    const tipo = document.querySelector('input[name="tipo"]:checked');

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

    // Validar la cantidad
    if (cantidad === '' || isNaN(cantidad) || Number(cantidad) <= 0) {
        valid = false;
        errorMessage += 'La cantidad a donar debe ser un número positivo.\n';
    }

    // Validar el método de pago
    if (metodo === '') {
        valid = false;
        errorMessage += 'El método de pago es obligatorio.\n';
    }

    // Validar el tipo de donación
    if (!tipo) {
        valid = false;
        errorMessage += 'El tipo de donación es obligatorio.\n';
    }

    // Mostrar errores o enviar el formulario
    if (!valid) {
        alert(errorMessage);
    } else {
        document.getElementById('confirmationMessage').style.display = 'block';
    }
});
