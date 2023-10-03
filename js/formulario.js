document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        if (!validarNombre(nombreInput.value)) {
            alert('Por favor, ingresa un nombre válido.');
            event.preventDefault();
        } else if (!validarEmail(emailInput.value)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault();
        }
    });

    function validarNombre(nombre) {
        return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombre);
    }

    function validarEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }
});
