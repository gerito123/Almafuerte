var vistaMateria = function($documento){

    var nombremateria = $documento.getElementById("nombremateria").value;
    var diamate = $documento.getElementById("dia").value;

    nombremateria = nombremateria.trim();
    nombremateria = nombremateria.toLowerCase();

    diamate = diamate.trim();
    diamate = diamate.toLowerCase();
    
    var materia_nueva  = new materia(nombremateria, diamate);
    materias.push(materia_nueva);

    console.log(nombremateria, diamate);
    
}