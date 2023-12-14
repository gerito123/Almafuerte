var controladorVistaBuscarProfesor = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = buscar[0];

    var botonbuscar = $documento.getElementById("boton_buscar");
    botonbuscar.addEventListener("click", function(e){
        e.preventDefault();
        vistaBuscarProfesor(window.document);
    });


}   