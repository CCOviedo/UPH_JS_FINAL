document.addEventListener("DOMContentLoaded", function(){
    var body = document.querySelector("body");
    body.style.display = "flex";
    
    
    var izquierda = document.getElementById("izquierda");
    var formulario = document.getElementById("formulario");
    
    var tabla = document.createElement("table");
    
    //cabeceras de la tabla
    var tr = document.createElement("tr");
    
    //Creacion Nombre
    var td = document.createElement("td");
    td.innerHTML = "Nombre";
    tr.appendChild(td);
    
    //Creacion Cantidad
    var td = document.createElement("td");
    td.innerHTML = "Cantidad";
    tr.appendChild(td);
    
    //Creacion Precio
    var td = document.createElement("td");
    td.innerHTML = "Precio";
    tr.appendChild(td);
    
    console.log(tabla);
    
    tabla.appendChild(tr);
    
    //Evento de formulario que introducira los elementos en la tabla
    formulario.addEventListener("submit", event => {
        event.preventDefault();

        var tr = document.createElement("tr");
        
        //Creacion Nombre
        var td = document.createElement("td");
        td.innerHTML = document.querySelector(".nombre").value;
        tr.appendChild(td);
    
        //Creacion Cantidad
        var td = document.createElement("td");
        td.innerHTML = document.querySelector(".cantidad").value;
        td.className = "cantidadTotal";
        tr.appendChild(td);
    
        //Creacion Precio
        var td = document.createElement("td");
        td.innerHTML = document.querySelector(".precio").value;
        td.className = "precioTotal";
        tr.appendChild(td);
    
        tabla.appendChild(tr);


        //Calculo precio Total
        var iva = document.getElementById("iva");
        var total = document.getElementById("total");
        var arr_precios = document.getElementsByClassName("precioTotal");
        var arr_cantidad = document.getElementsByClassName("cantidadTotal");
        
        total.innerHTML = "";
        var suma = 0;
        for(var i=0; i < arr_precios.length; i++){
            if(arr_precios[i].innerHTML !== ""){
                suma += parseInt(arr_precios[i].innerHTML) * parseInt(arr_cantidad[i].innerHTML);
            }
        }
        if(suma !== null){
            total.innerHTML = "Total: "+suma;
        }
        

    });

    tabla.style.display = "block";

    izquierda.appendChild(tabla);

});
