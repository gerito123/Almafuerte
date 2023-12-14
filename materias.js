    /*var materia = function(nombre, dia){
        var sthis = this;
        sthis.materia = {
            nom: nombre,
            dia: dia
        };
    getNombre = function(){return sthis.materia.nom;}
    setNombre = function(nom){sthis.materia.nom = nom;}

    getDia = function(){return sthis.materia.dia;}
    setDia = function(dia){sthis.materia.dia = dia;}

    return{
        getNombre,
        setNombre,
        getDia,
        setDia

    };
    }*/
    class materia{
        nombre = ""
        dias = ""
    constructor(nombre, dias){
        this.nombre = nombre
        this.dias = dias
    }
    get nombre(){return this.nombre;}
    set nombre(nombre){this.nombre = nombre;}

    get dias(){return this.dias;}
    set dias(dias){this.dias = dias;}
    }