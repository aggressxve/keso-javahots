const formulario = document.getElementById("registroForm");

// Espera el evento submit del formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombreCompleto").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmPassword").value;

    let hayErrores = false;


    // Validación del nombre completo
    const alertNombre = document.getElementById("alertNombre");
    const campoNombre = document.getElementById("nombreCompleto");
    const patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (
        nombre === "" ||
        nombre.length < 3 ||
        !patronNombre.test(nombre)
    ) {
        alertNombre.classList.remove("d-none");
        campoNombre.classList.add("is-invalid");
        hayErrores = true;
    } else {
        alertNombre.classList.add("d-none");
        campoNombre.classList.remove("is-invalid");
    }


    // Validación del teléfono
    const alertTelefono = document.getElementById("alertTelefono");
    const campoTelefono = document.getElementById("telefono");
    const patronTelefono = /^[0-9]{10}$/;

    if (
        telefono === "" ||
        !patronTelefono.test(telefono)
    ) {
        alertTelefono.classList.remove("d-none");
        campoTelefono.classList.add("is-invalid");
        hayErrores = true;
    } else {
        alertTelefono.classList.add("d-none");
        campoTelefono.classList.remove("is-invalid");
    }


    // Validación del correo electrónico
    const alertEmail = document.getElementById("alertEmail");
    const campoEmail = document.getElementById("email");
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        email === "" ||
        !patronEmail.test(email)
    ) {
        alertEmail.classList.remove("d-none");
        campoEmail.classList.add("is-invalid");
        hayErrores = true;
    } else {
        alertEmail.classList.add("d-none");
        campoEmail.classList.remove("is-invalid");
    }


    // vAlidación de la contraseña
    const alertPassword = document.getElementById("alertPassword");
    const campoPassword = document.getElementById("password");
    const patronPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}$/; //8-20caracteres, al menos una mayúscula, una minúscula y un número (sin espacios)

    if (
        password === "" ||
        !patronPassword.test(password)
    ) {
        alertPassword.classList.remove("d-none");
        campoPassword.classList.add("is-invalid");
        hayErrores = true;
    } else {
        alertPassword.classList.add("d-none");
        campoPassword.classList.remove("is-invalid");
    }


    // Confirmacion de la contraseña
    const alertCoincidencia =
        document.getElementById("alertCoincidencia");
    const campoConfirmarPassword =
        document.getElementById("confirmPassword");

    if (
        confirmarPassword === "" ||
        password !== confirmarPassword
    ) {
        alertCoincidencia.classList.remove("d-none");
        campoConfirmarPassword.classList.add("is-invalid");
        hayErrores = true;
    } else {
        alertCoincidencia.classList.add("d-none");
        campoConfirmarPassword.classList.remove("is-invalid");
    }


    // Alerta general de errores
    const alertCampos = document.getElementById("alertCampos");

    if (hayErrores) {
        alertCampos.classList.remove("d-none");
    } else {
        alertCampos.classList.add("d-none");
    }


    // Alerta de registro exitoso
    const alertExito = document.getElementById("alertExito");

    if (!hayErrores) {
        alertExito.classList.remove("d-none");
        const usuario = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            password: password
        };

        const usuariosRegistrados = JSON.stringify(usuario);

        console.log(usuario);
        console.log(usuariosRegistrados);

    } else {

        alertExito.classList.add("d-none");
    }

});