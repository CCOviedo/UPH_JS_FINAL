function rellenar(valor){
    var arr = valor.split('');
    if(valor.length < 8){
        for(var i=0; i< arr.length; i++){
            while(arr.length < 8){
                arr.unshift("0");
            }
        }
        console.log(arr.join(''));
    }
    return arr.join('');
}

function numeroPositivo(valor){
    for(var i=0; i < valor.length; i++){
        if(valor[i] < 0){
            console.log("Debes introducir un valor positivo.");
            return false;
        }else{
            return true;
        }
    }
}

function menorOcho(valor){
    if(valor.length < 8){
        console.log("Debes introducir un numero de 8 cifras.");
        return false;
    }else{
        return true;
    }
}

function noNumerico(valor){
    for(var i=0; i < valor.length; i++){
        if(isNaN(valor[i])){
            console.log("Debes introducir un valor numérico.");
            return false;
        }else{
            return true;
        }
    }
}

function calcLetra(dni){
    var cadena = dni.toString();
    var caracteres = "TRWAGMYFPDXBNJZSQVHLCKE";

    //var carac = cadena % 23;

    //noNumerico(cadena);
    //menorOcho(cadena);
    //numeroPositivo(cadena);

    // if(noNumerico(cadena) && menorOcho(cadena) && numeroPositivo(cadena)){
    //     //Hacer calculo de letra
    // }

    var nuevo = rellenar(cadena);
    var carac = nuevo % 23;
    var letra = caracteres.charAt(carac);

    return console.log(nuevo+letra);

    // switch(carac){
    //     case 0:
    //         console.log(nuevo+"T");
    //         break;
    //     case 1:
    //         console.log(nuevo+"E");
    //         break;
    //     case 2:
    //         console.log(nuevo+"W");
    //         break;
    //     case 3:
    //         console.log(nuevo+"A");
    //         break;
    //     case 4:
    //         console.log(nuevo+"G");
    //         break;
    //     case 5:
    //         console.log(nuevo+"M");
    //         break;
    //     case 6:
    //         console.log(nuevo+"Y");
    //         break;
    //     case 7:
    //         console.log(nuevo+"F");
    //         break;
    //     case 8:
    //         console.log(nuevo+"P");
    //         break;
    //     case 9:
    //         console.log(nuevo+"D");
    //         break;
    //     case 10:
    //         console.log(nuevo+"X");
    //         break;
    //     case 11:
    //         console.log(nuevo+"B");
    //         break;
    //     case 12:
    //         console.log(nuevo+"N");
    //         break;
    //     case 13:
    //         console.log(nuevo+"J");
    //         break;
    //     case 14:
    //         console.log(nuevo+"Z");
    //         break;
    //     case 15:
    //         console.log(nuevo+"S");
    //         break;
    //     case 16:
    //         console.log(nuevo+"Q");
    //         break;
    //     case 17:
    //         console.log(nuevo+"V");
    //         break;
    //     case 18:
    //         console.log(nuevo+"H");
    //         break;
    //     case 19:
    //         console.log(nuevo+"L");
    //         break;
    //     case 20:
    //         console.log(nuevo+"C");
    //         break;
    //     case 21:
    //         console.log(nuevo+"K");
    //         break;
    //     case 22:
    //         console.log(nuevo+"E");
    //         break;
    //     default:
    //         console.log("");
    //         break;
    // }
}

calcLetra("5099706");
rellenar("354");