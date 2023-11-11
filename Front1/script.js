document.addEventListener("DOMContentLoaded", function() {
    const inicioButton = document.querySelector("#inicioButton");
    const contactoButton = document.querySelector("#contactoButton");
    const areaButton = document.querySelector("#areaButton");

    inicioButton.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });

    contactoButton.addEventListener("click", function() {
        window.location.href = "index2.html"; 
    });

    areaButton.addEventListener("click", function() {
        window.location.href = "index3.html"; // Cambia "ruta_de_area_de_trabajo.html" por tu ruta real
    });
});
