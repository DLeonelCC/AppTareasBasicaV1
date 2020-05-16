(function(){
    //variables
    var lista = document.getElementById("lista");
    var TareaInput = document.getElementById("TareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    //funciones

    //----------------------------Agregar Tarea-----------------------------------
    var AgregarTarea = function(){
        var tarea = TareaInput.value;  //accediendo al valor del input
        var NuevaTarea = document.createElement("li"); //creando un elemento <li>
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea); // creando nodo tipo texto con el valor de tarea

        if(tarea === ""){
            TareaInput.setAttribute("placeholder","Agrega una tarea valida");  //manadando un placeholder al input de html
            alert("Introduzca una Tarea Valida");
            return false;      //salir de toda la funcion
        }

        enlace.appendChild(contenido);    //colocar el contenido al enlace 
        enlace.setAttribute("href","#");  //y establecer una atributo href
        NuevaTarea.appendChild(enlace);   //agregamos el enlace a la nueva tarea
        lista.appendChild(NuevaTarea);    //agregamos la NuevaTarea a lista

        TareaInput.value = "";

        for(var i = 0; i <=lista.children.length - 1; i++){   //lista = accedemos a lista children = trae todos los elementos hijos osea <li> length = cuanta elementos tegas
            lista.children[i].addEventListener("click", EliminarTarea);
        }
    }

    //-----------------------------Comprobacion------------------------------------
    var ComprobarInput = function(){
        TareaInput.value = "";
        TareaInput.setAttribute("placeholder","Agrega una nueva tarea")
    }


    //------------------------------Eliminar Tarea-----------------------------------
    var EliminarTarea = function(){
        this.parentNode.removeChild(this);  // this = este Elemento del elemento padre(parentNode) remover este(this)
    }

    //----------------------------------------------------------eventos--------------------------------------------------

    //agregar tarea
    btnNuevaTarea.addEventListener("click", AgregarTarea);

    //comprobar input
    TareaInput.addEventListener("click",ComprobarInput);

    //borrando elementos de la lista
    for(var i = 0; i <=lista.children.length - 1; i++){   //lista = accedemos a lista children = trae todos los elementos hijos osea <li> length = cuanta elementos que tengas
        lista.children[i].addEventListener("click", EliminarTarea);
    }


}());