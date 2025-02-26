document.getElementById("botonBuscar").addEventListener("click", function() {
    const buscador = document.getElementById("buscador");
    const display = window.getComputedStyle(buscador).display;

    if (display === "none") {
        buscador.style.display = "block";
    } else {
        buscador.style.display = "none";
    }
});