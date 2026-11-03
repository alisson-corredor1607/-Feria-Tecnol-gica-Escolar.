const formulario = document.querySelector("form");

// envío del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // obtener datos ingresados
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    // confirmación
    alert(
        "¡Inscripción exitosa a la Feria Tecnológica!\n\n" +
        "Nombre: " + nombre + "\n" +
        "Correo: " + correo + "\n" +
        "Teléfono: " + (telefono || "No registrado")
    );

    // limpiar campos
    formulario.reset();
});

// pasar el mouse por los proyectos
const proyectos = document.querySelectorAll(".Contenido li");

proyectos.forEach(function(proyecto) {
    proyecto.addEventListener("click", function() {
        alert("Proyecto seleccionado: " + proyecto.textContent);
    });
});

// bienvenida
window.addEventListener("load", function() {
    console.log("Bienvenidos a la Feria Tecnológica");
});
