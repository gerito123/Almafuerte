var vistaBuscarProfesor = function($documento){
   var nombre_buscador = document.getElementById("buscar_profesor_nombre").value;
   var apellido_buscador = document.getElementById("buscar_profesor_apellido").value;

   var cont = document.querySelector(".buscar");
   var texto = $documento.createElement("p");
   let noencontrado = true;
   
   var nombre_filtro = nombre_buscador.toLowerCase();
   nombre_filtro = nombre_filtro.trim();
   var apellido_filtro = apellido_buscador.toLowerCase();
   apellido_filtro = apellido_filtro.trim();
   console.log(nombre_filtro, apellido_filtro);

   profe.forEach(profes =>{
    if(profes.nombre == nombre_filtro && profes.apellido == apellido_filtro){
        texto.innerHTML = `El profesor ${nombre_filtro} ${apellido_filtro} existe y tiene las materias ${profes.materias}`;
        cont.appendChild(texto);
        noencontrado = false;
    }
    if(noencontrado == true){
       
        texto.innerHTML = "No se encontro al profesor";
        cont.appendChild(texto);
 }
    
   });

}