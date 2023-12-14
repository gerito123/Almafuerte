    /*controladorvistaprofesor = iguala las variables a los elementos html y llama a vistaprofesor cuando se hace el submit
      vistaprofesor
      controladorvistaAlumno 
      vistaAlumno
      controladorvistamateria
      vistaMateria
      datos

    */


    
   // console.log("load eject");   
   

    /*var menu = function(e){
        e.preventDefault();
        var cont = document.getElementById("cont_p");
        var op = '<ul id="profesor">\
        <li id="profesor" >Profesor</li>\
        <li id="listado">Listado</li>\
        <li id="nuevo">Nuevo</li>\
        </ul>'
        cont.innerHTML = op;
      
    };*/

    window.addEventListener("load", function(){
     
        
        let bandera = true;
        let logo = document.querySelector(".cont_img");
        let nav = this.document.getElementById("nav");
        let menus = this.document.querySelectorAll(".cont_menus");
        let listas_li = document.querySelectorAll("li");
        let boton_responsive = this.document.querySelector(".boton_responsive");
        
 
        
        boton_responsive.addEventListener("click", ()=>{
      
            if(bandera){
                logo.style.display = "none";
                nav.style.height = "50%";
                nav.style.transition = ".7s";
               
            console.log(menus);
            menus.forEach(menu => {
                menu.style.display = "flex";
                     
            });
            listas_li.forEach(lista => {
                lista.style.display = "flex";
            });
           
            setTimeout(()=>{
                nav.style.overflow = "visible";
            }, 700);
            bandera = !bandera;  
        }
        
       else{ 
    bandera = !bandera;  
      cerrar_menu();
  
    }
    console.log(bandera)
 });





        let formulario = document.getElementById("formulario");
        let texto_portada = document.querySelector(".portada");
        let texto1 = document.createElement("p");
        let texto2 = document.createElement("p");
        let texto3 = document.createElement("p");
        let texto4 = document.createElement("p");
        let textos = new Array();
        
        texto1.textContent = "Almafuerte";
        texto2.textContent = "“Hacia el desarrollo en salud de nuestra juventud, el avance intelectual por el ejercicio del pensamiento y la formacion integral del hombre por la maduración de sus sentimientos”";
        texto3.textContent = "EESTN8";
        texto4.textContent = "Somos el futuro";
        console.log(texto1, texto2, texto3, texto4);
        texto1.classList.add("texto_portada");
        texto2.classList.add("texto_portada");
        texto2.classList.add("frase");
        texto3.classList.add("texto_portada");
        texto4.classList.add("texto_portada");

        textos.push(texto1);
        textos.push(texto2);
        textos.push(texto3);
        textos.push(texto4);
       
        let i = 0;
        /*texto_portada.appendChild(textos[i]);
        i++;    
        setInterval(function(){
            if(i == 4)i=0;
            
        texto_portada.appendChild(textos[i]);
            i++;     
        
        }, 8000);
*/


     let bandera_materia = true;   
    botonmateria.addEventListener("click", function(event){
 
       
        var menu = botonmateria.nextElementSibling;
        console.log(menu);
     
        if(bandera_materia){
            menu.style.display = "flex";
            bandera_materia = !bandera_materia;
        }
        else{
            menu.style.display = "none";
            bandera_materia = !bandera_materia;
        }

        botonlistamateria.addEventListener("click", function(e){
            e.preventDefault();
            vistalistadomateria(window.document);
            formulario.style.display = "block";
            menu.style.display = "none";
            bandera_materia = !bandera_materia;
             borrar_lista();
             bandera = !bandera;  
             cerrar_menu();
        });
        botonnuevomateria.addEventListener("click", function(e){
            e.preventDefault();
            controladorvistamateria(window.document);
            formulario.style.display = "block";
            menu.style.display = "none";
            bandera_materia = !bandera_materia;
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });
        botonbuscarmateria.addEventListener("click", function(e){
            e.preventDefault(); 
            controladorVistaBuscarMateria(window.document);
            formulario.style.display = "block";
            menu.style.display = "none";
            bandera_materia = !bandera_materia;
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });

        
    });

    let bandera_alumno = true;
    botonalumno.addEventListener("click", function(event){
        event.preventDefault();
        var menu = botonalumno.nextElementSibling;
      
        if(bandera_alumno){
            menu.style.display = "flex";
            bandera_alumno = !bandera_alumno;
        }
        else{menu.style.display = "none";
        bandera_alumno = !bandera_alumno;}

    

        botonnuevoalumno.addEventListener("click", function(e){
            e.preventDefault();
            formulario.style.display = "block";
            controladorvistaAlumno(window.document);
            menu.style.display = "none";
            bandera_alumno = !bandera_alumno;
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });
        botonlistaalumno.addEventListener("click", function(e){
            e.preventDefault();
            formulario.style.display = "block";
            vistalistadoalumno(window.document);
            menu.style.display = "none";
            bandera_alumno = !bandera_alumno;
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
            
        });
        botonbuscaralumno.addEventListener("click", function(e){
            
            e.preventDefault();
            formulario.style.display = "block";
            controladorVistaBuscarAlumno(window.document);
            menu.style.display = "none";
            bandera_alumno = !bandera_alumno;
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });
  

        });
      
           
        let bandera_profesor = true;
       botonprofesor.addEventListener("click", function(e){
        e.preventDefault();
        var menu = botonprofesor.nextElementSibling;
       
        if(bandera_profesor){
            menu.style.display = "flex";
            bandera_profesor = !bandera_profesor;
        }
        else{
            menu.style.display = "none";
            bandera_profesor = !bandera_profesor;
        }
      

        botonnuevoprofesor.addEventListener("click", function(e){
            e.preventDefault();
            formulario.style.display = "block";
            controladorvistaprofesor(window.document);
            menu.style.display = "none";
            bandera_profesor = !bandera_profesor
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });
        botonlistaprofesor.addEventListener("click", function(e){
            e.preventDefault();
            formulario.style.display = "block";
            vistalistadoprofesor(window.document);
            menu.style.display = "none";
            bandera_profesor = !bandera_profesor
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });

        botonbuscarprofe.addEventListener("click", function(e){
            e.preventDefault();
            formulario.style.display = "block";
            vistabuscarprofesor(window.document);
            menu.style.display = "none";
            bandera_profesor = !bandera_profesor
            borrar_lista();
            bandera = !bandera;  
            cerrar_menu();
        });
       });
        
        

/*
    botonnuevo.addEventListener("click", function(event){
   
    event.preventDefault(); 
 
    var cont = document.getElementById("formulario");
    cont.innerHTML = formulario[0];
    var opcion = document.querySelectorAll("option");
        

   
   

    var boton = document.getElementById("boton");
    boton.addEventListener("click", function(event){
        event.preventDefault();
        var nombreprofe = document.getElementById("nombreprofe").value;
        var apellidoprofe = document.getElementById("apellidoprofe").value;
        var nuevoprofe = new profesor(nombreprofe, apellidoprofe, materiaprofe); 
        profe.push(nuevoprofe);
         
         
     console.log(nuevoprofe.nombre, nuevoprofe.apellido);
        
         botonlista.addEventListener("click", function(e){

            e.preventDefault();
            
            console.log(nuevoprofe.nombre, nuevoprofe.apellido, nuevoprofe.materias);
            var texto = `${nuevoprofe.nombre}, ${nuevoprofe.apellido} `;
            cont.insertAdjacentHTML("afterbegin", texto);   
        
        
            
        
            
        });
         
    });

    });

   /*botonlista.addEventListener("click", function(e){
        e.preventDefault();
        console.log(profe.getNombre(), profe.getApellido());
    });*/
    function borrar_lista(){
        if(screen.width < 700){
         
            listas_li.forEach(lista => {
                lista.style.display = "none";
            });
            nav.style.height = "80px";
        }
    }
    });
    
    function cerrar_menu(){
        let bandera = true;
        let logo = document.querySelector(".cont_img");
        let nav = this.document.getElementById("nav");
        let menus = this.document.querySelectorAll(".cont_menus");
        if(screen.width < 700){
        nav.style.height = "60px";
        nav.style.overflow = "hidden";
  
        logo.style.display = "flex";
            menus.forEach(menu => {
                
                menu.style.display = "none";
            
            });
        }
    }

    