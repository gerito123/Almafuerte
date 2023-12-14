/*var profesor = function(nombre, apellido){
var sthis = this;
sthis.profe = {
    nom: nombre,
    ape: apellido
}
getNombre = function(){return sthis.profe.nom;}
setNombre = function(nom){sthis.profe.nom = nom;}

getApellido = function(){return sthis.profe.ape;}
setApellido = function(ape){sthis.profe.ape = ape;}

return{
    getNombre,
    setNombre,
    getApellido,
    setApellido
};
}*/

class profesor{
nombre = ""
apellido = ""
materias = []
constructor(nombre, apellido, materias){
this.nombre = nombre
this.apellido = apellido
this.materias = materias
}
get #nombre(){return this.nombre;}
set #nombre(nombre){this.nombre = nombre}

get #apellido(){return this.apellido;}
set #apellido(apellido){this.apellido = apellido;}

get #materias(){return this.materias;}
set #materias(materias){this.materias = materias;}
}