var formulario = new Array();
var profe = new Array();
var materias = new Array();
var alum = new Array();
var buscar = new Array();
let listados = new Array();

var botonprofesor = document.getElementById("profesor");
var botonalumno = document.getElementById("alumno"); 
var botonmateria = document.getElementById("materia");

var botonnuevoprofesor = document.getElementById("nuevo");
var botonlistaprofesor = document.getElementById("listado");
var botonbuscarprofe = document.getElementById("buscar_profesor");

var botonnuevomateria = document.getElementById("nuevo_materia");
var botonlistamateria = document.getElementById("listado_materia");
var botonbuscarmateria = document.getElementById("buscar_materia");

var botonnuevoalumno = document.getElementById("nuevo_alumno");
var botonlistaalumno = document.getElementById("listado_alumno");
var botonbuscaralumno = document.getElementById("buscar_alumno");



    var formularioprofesor = `<form id="formularioprofesor" >
    <p class="titulo_registro">Registro De Profesor</p>\
    <input type="text" id="nombreprofe" class="form_input" placeholder="Ingrese su nombre">\
    <input type="text" id="apellidoprofe" class="form_input" placeholder="Ingrese su apellido" value="">\
    <select name="" id="materiasprofe" class="form_input"  >\
    <option value="" class ="opcion" id="materias_profe" placeholder="Ingrese la materia">Ninguna</option> </select>\
    <input type="submit" id="boton" class="boton">\
    </form>`;
    var formulariomateria = '<form id="formularioprofesor" >\
    <p class="titulo_registro">Registro De Materia</p><input type="text" id="nombremateria" class="form_input" placeholder="Nombre de la materia">\
    <input type="text" id="dia" value="" class="form_input" placeholder="Dia de la materia">\
    <input type="submit" id="boton" class="boton">\
    </form> ';
    var formularioalumno = '<form id="formularioprofesor" >\
    <p class="titulo_registro">Registro De Alumno</p><input type="text" id="nombrealumno" class="form_input" placeholder="Ingrese su nombre">\
    <input type="text" id="apellidoalumno" value="" class="form_input" placeholder="Ingrese su apellido">\
    <input type="submit" id="boton" class="boton">\
    </form> ';

    var buscarprofe = '<div class="buscar"><p>Buscador Profesor</p> \
    <input type="text" id="buscar_profesor_nombre" class="buscador" placeholder="Buscar Nombre">\
    <input type="text" id="buscar_profesor_apellido" class="buscador" placeholder="Buscar Apellido"> <br> <br>\
    <input type="submit" value="Buscar" id="boton_buscar"class="boton"></div>';

    var buscaralum = '<div class="buscar"><p>Buscador Alumno</p>\
    <input type="text" id="buscar_alumno_nombre" class="buscador" placeholder="Buscar Nombre">\
    <input type="text" id="buscar_alumno_apellido" class="buscador" placeholder="Buscar Apellido"> <br> <br>\
    <input type="submit" value="Buscar" id="boton_buscar"class="boton"></div>';

    var buscarmateria = '<div class="buscar"><p>Buscador Materia</p>\
    <input type="text" id="buscar_materia_nombre" class="buscador" placeholder="Nombre de la materia">\
     <br> <br>\
    <input type="submit" value="Buscar" id="boton_buscar"class="boton"></div>';

    let lista_materia = '<div class="listados" id="listados_materias">\
    <div class="nombre_lista"><h3 class="nombre_lista">Nombre</h3></div>\
    <div class="apellido_lista"><h3 class="apellido_lista">Dias</h3></div>\
    </div>';

    let lista_alumno = '<div class="listados" id="listados_alumnos">\
    <div class="nombre_lista"><h3 class="nombre_lista">Nombre</h3></div>\
    <div class="apellido_lista"><h3 class="apellido_lista">Apellido</h3></div>\
    </div>';

    let lista_profesor = '<div class="listados" id="listados_profesores">\
    <div class="nombre_lista"><h3 class="nombre_lista">Nombre</h3></div>\
    <div class="apellido_lista"><h3 class="apellido_lista">Apellido</h3></div>\
    </div>';
    
    buscar.push(buscarprofe);
    buscar.push(buscaralum);
    buscar.push(buscarmateria);

    formulario.push(formularioprofesor);
    formulario.push(formulariomateria);
    formulario.push(formularioalumno);
    
    listados.push(lista_materia);
    listados.push(lista_alumno);
    listados.push(lista_profesor);
  