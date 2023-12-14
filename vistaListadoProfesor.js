var vistalistadoprofesor = function($documento){ 
    var cont = $documento.getElementById("formulario");
        cont.innerHTML = listados[2];
        console.log(listados[2])
        let listado = document.getElementById("listados_profesores");
        
    profe.forEach(profes => {
        console.log(profes.nombre);
        let nombre = document.createElement("div");
        let apellido = document.createElement("div");

        nombre.classList.add("nombre");
        apellido.classList.add("apellido");
        
        nombre.textContent = profes.nombre;
        apellido.textContent = profes.apellido;
        
        listado.appendChild(nombre);
        listado.appendChild(apellido);
        
    });
}