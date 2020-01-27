var array = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga","test"];
var max = "";
var longitud = 0;

var objeto = {
    longitud: '',
    string: ''
};

function masLargo(arr){
    arr.forEach(element => {
        if(element.length > max.length){
            max = element;
        }
    });
    console.log("El mayor es " + max + " con logitud " + max.length);
    document.write("El mayor es " + max + " con logitud " + max.length);

    return {
        longitud: max.length,
        string: max
    }

    console.log(objeto);
}

masLargo(array);