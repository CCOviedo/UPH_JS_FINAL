var cuentaLetras = function(palabra){
    var arr = palabra.split('');
    var obj = {};

    for(var i=0; i< arr.length; i++){
        if(typeof obj[arr[i]] === "undefined"){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }

    return obj;
}


resultadoContador = cuentaLetras('abbabcbdbabdbdbabababcbcbab');
console.log(resultadoContador['a'] === 7);
console.log(resultadoContador.b === 14);
console.log(resultadoContador['c'] === 3);