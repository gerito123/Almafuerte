var controladorVistaBuscarAlumno = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = buscar[1];

    var botonbuscar = $documento.getElementById("boton_buscar");
    botonbuscar.addEventListener("click", function(e){
        e.preventDefault();
        vistaBuscarAlumno(window.document);
    });
}