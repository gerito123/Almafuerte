let vistaBuscarAlumno = function($documento){
let nombre_buscador = document.getElementById("buscar_alumno_nombre").value;
let apellido_buscador = document.getElementById("buscar_alumno_apellido").value;


let cont = document.querySelector(".buscar");

let nombre_filtro = nombre_buscador.toLowerCase();
nombre_filtro = nombre_filtro.trim();
let apellido_filtro = apellido_buscador.toLowerCase();
apellido_filtro = apellido_filtro.trim();
let texto = $documento.createElement("p");

alum.forEach(alumno => {
    if(alumno.nombre == nombre_filtro && alumno.apellido == apellido_filtro){
                
        texto.innerHTML = `El alumno ${alumno.nombre} ${alumno.apellido} existe`;
        cont.appendChild(texto);
    
    }
    else {
        texto.innerHTML = "No se encontro al alumno";
        cont.appendChild(texto);
 }
});

}