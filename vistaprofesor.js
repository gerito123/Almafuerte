var vistaprofesor = function($documento){
    var nombre = $documento.getElementById("nombreprofe").value;
    var apellido = $documento.getElementById("apellidoprofe").value;


    nombre = nombre.trim();
    nombre = nombre.toLowerCase();

    apellido = apellido.trim();
    apellido = apellido.toLowerCase();


  //  if(nombre.includes("1", 0)) PREGUNTAR SI SE PUEDE PONER TODAS LAS LIMITACIONES DE UNA 

    var nuevoprofe = new profesor(nombre, apellido, materias);
 

    console.log(nombre, apellido);
    profe.push(nuevoprofe);
    

}