var vistalistadomateria = function($documento){
    var cont = $documento.getElementById("formulario");
        cont.innerHTML = listados[0];
        let listado = document.getElementById("listados_materias");
        
    materias.forEach(materia => {
        console.log(materia.nombre);
        let nombre = document.createElement("div");
        let dias = document.createElement("div");

        nombre.classList.add("nombre");
        dias.classList.add("apellido");
        
        nombre.textContent = materia.nombre;
        dias.textContent = materia.dias;
        
        listado.appendChild(nombre);
        listado.appendChild(dias);
        
        
    });
}