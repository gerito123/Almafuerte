var vistaBuscarMateria = function($documento){
    var nombre_buscador = document.getElementById("buscar_materia_nombre").value;
    
    var nombre_filtro = nombre_buscador.toLowerCase();
    nombre_filtro = nombre_filtro.trim();

    
   var cont = document.querySelector(".buscar");

    materias.forEach(materia => {
        if(nombre_filtro == materia.nombre){
            var texto = $documento.createElement("p");
        texto.innerHTML = `la materia ${nombre_filtro} existe`;
        cont.appendChild(texto);
        }
        else {
            var texto = $documento.createElement("p");
            texto.innerHTML = "No se encontro al profesor";
            cont.appendChild(texto);
     }
    });
}