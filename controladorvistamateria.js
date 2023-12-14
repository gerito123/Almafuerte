var controladorvistamateria = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = formulario[1];
    var boton = $documento.getElementById("boton");
    boton.addEventListener("click", function(event){
        event.preventDefault();
        vistaMateria(window.document);
});
}