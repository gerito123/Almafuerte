var controladorVistaBuscarMateria = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = buscar[2];

    var botonbuscar = $documento.getElementById("boton_buscar");
    botonbuscar.addEventListener("click", function(e){
        e.preventDefault();
        controladorvistabuscarmateria(window.document);
    });
}