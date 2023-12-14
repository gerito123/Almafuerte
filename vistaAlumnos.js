var vistaAlumno = function($documento){
var nombrealumno = $documento.getElementById("nombrealumno").value;
var apellidoalumno = $documento.getElementById("apellidoalumno").value;

nombrealumno = nombrealumno.trim();
nombrealumno = nombrealumno.toLowerCase();

apellidoalumno = apellidoalumno.trim();
apellidoalumno = apellidoalumno.toLowerCase();
var nuevo_alumno = new alumno(nombrealumno, apellidoalumno);
alum.push(nuevo_alumno);
console.log(nombrealumno, apellidoalumno);
}