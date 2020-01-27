var resultados = [];
var arrayDeTest1 = ['Richie', 'Joanie', 'Greg', 'Marcia', 'Bobby'];
var arrayDeTest2 = ['Blanka', 'Zangief', 'Chun Li', 'Guile'];
var arrayDeTest3 = ['Red', 'Blue', 'Green'];
var max = "";

function calculoLongitudMasLargo(arr){
    arr.forEach(element => {
        if(element.length > max.length){
            max = element;
            resultados.push(max);
        }
    });
}

calculoLongitudMasLargo(arrayDeTest1);
calculoLongitudMasLargo(arrayDeTest2);
calculoLongitudMasLargo(arrayDeTest3);

function media(res){
    var suma = 0;
    res.forEach(element => {
        suma += element.length;
    });
    var media = suma/res.length;
    document.write(media);
    return media;
}

media(resultados); // debe imprimir 6