const formulario = document.getElementById('formulario');
const enviar = document.getElementById('enviar');
const mensajeEnviado = document.getElementById('mensaje-enviado');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Validar nombre
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        alert('El nombre solo puede contener letras');
        return;
    }

    // Validar apellido
    if (!/^[a-zA-Z]+$/.test(apellido)) {
        alert('El apellido solo puede contener letras');
        return;
    }

    // Validar email
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        alert('El email no es válido');
        return;
    }

    // Validar fecha de nacimiento
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    if (fechaNacimientoDate.getTime() > fechaActual.getTime() - 31536000000) {
        alert('La fecha de nacimiento no puede ser mayor a 100 años');
        return;
    }

    // Si todo está bien, enviar el formulario
    fetch('(link unavailable)', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            apellido,
            email,
            fechaNacimiento
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.enviado) {
            mensajeEnviado.innerHTML = 'Mensaje enviado con éxito';
            mensajeEnviado.style.color = 'green';
        } else {
            mensajeEnviado.innerHTML = 'Error al enviar el mensaje';
            mensajeEnviado.style.color = 'red';
        }
    })
    .catch((error) => {
        console.error('Error al enviar el formulario:', error);
    });
    // Si todo está bien, enviar el formulario
    const simularEnvio = () => {
        return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ enviado: true });
        }, 2000);
  });
};

simularEnvio()
  .then((data) => {
    if (data.enviado) {
      mensajeEnviado.innerHTML = 'Mensaje enviado con éxito';
      mensajeEnviado.style.color = 'green';
    } else {
      mensajeEnviado.innerHTML = 'Error al enviar el mensaje';
      mensajeEnviado.style.color = 'red';
    }
  })
  .catch((error) => {
    console.error('Error al enviar el formulario:', error);
  });
});
