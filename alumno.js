
class alumno{
nombre = ""     //Hace referencia a la clase
apellido = ""

constructor(nombre, apellido){
    this.nombre = nombre  //nombre hace referencia al parametro
    this.apellido = apellido
}

get #nombre(){return this.nombre;}
set #nombre(nombre){this.nombre = nombre;}

get #apellido(){return this.apellido;}
set #apellido(apellido){this.apellido = apellido;}

}

/*var alumno = function(nombre, apellido){

    var sthis = this;
    sthis.alum = {
        nom: nombre,
        ape: apellido
    };

    getNombre = function(){return sthis.alum.nom;}
    setNombre = function(nom){sthis.alum.nom = nom;}

    getApellido = function(){return sthis.alum.ape;}
    setApellido = function(ape){sthis.alum.ape = ape;}

    return{
        getNombre,
        setNombre,
        getApellido,
        setApellido
    };
}*/