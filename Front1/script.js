document.addEventListener("DOMContentLoaded", function() {
    const inicioButton = document.querySelector("#inicioButton");
    const contactoButton = document.querySelector("#contactoButton");
    const areaButton = document.querySelector("#areaButton");

    inicioButton.addEventListener("click", function() {
        window.location.href = "ruta_de_inicio.html"; // Cambia "ruta_de_inicio.html" por tu ruta real
    });

    contactoButton.addEventListener("click", function() {
        window.location.href = "ruta_de_contacto.html"; // Cambia "ruta_de_contacto.html" por tu ruta real
    });

    areaButton.addEventListener("click", function() {
        window.location.href = ""; // Cambia "ruta_de_area_de_trabajo.html" por tu ruta real
    });
});
