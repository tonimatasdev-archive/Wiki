function mostrarContenido(contenidoId) {
    var contenidos = document.getElementsByClassName("contenido");
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
    }

    var contenido = document.getElementById(contenidoId);
    if (contenido) {
        contenido.style.display = "block";
    }
}