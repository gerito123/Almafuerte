var controladorvistaAlumno = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = formulario[2];
    var boton = $documento.getElementById("boton");
    
    boton.addEventListener("click", function(event){
        event.preventDefault();
        vistaAlumno(window.document);
});
};