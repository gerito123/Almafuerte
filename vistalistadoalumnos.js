var vistalistadoalumno = function($documento){
    var cont = $documento.getElementById("formulario");
    cont.innerHTML = listados[1];
    let listado = document.getElementById("listados_alumnos");
        
    alum.forEach(alumno => {
        
            console.log(alumno.nombre);
            let nombre = document.createElement("div");
            let apellido = document.createElement("div");
    
            nombre.classList.add("nombre");
            apellido.classList.add("apellido");
            
            nombre.textContent = alumno.nombre;
            apellido.textContent = alumno.apellido;
            
            listado.appendChild(nombre);
            listado.appendChild(apellido);
            
     
    });
}