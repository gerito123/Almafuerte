var controladorvistaprofesor = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = formulario[0];

    var contmaterias = $documento.getElementById("materiasprofe");
    var contenedormaterias = new Array();
   for(var i = 0; i<materias.length; i++){
      
      contenedormaterias[i] = `<option value="" class ="opcion">${materias[i].nombre}</option> `
    }
    contmaterias.innerHTML = contenedormaterias;
    
    var boton = $documento.getElementById("boton");
    boton.addEventListener("click", function(e){
        e.preventDefault();
        vistaprofesor(window.document);
    });
}