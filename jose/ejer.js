class calculadora{
    Perfecto(){
        let result = document.getElementById("result")
        let n = 1, acum = 0
        let num = parseInt(result.value)
        while (n < num){
            if (num % n == 0){
                acum = acum + n
            }
            n++
        }
        if(acum == num){ 
        result.value= 'el numero es perfecto'  }
        else{ result.value ='el numero no es perfecto'}
    }
    contarPalabras(){
        var result= document.getElementById("result")
        let num = result.value
        num = num.replace (/\r?\n/g," ");
        num = num.replace (/[ ]+/g," ");
        num = num.replace (/^ /,"");
        num = num.replace (/ $/,"");
        var textoTroceado = num.split (" ");
        var numeroPalabras = textoTroceado.length;
        result.value = `las palabras contadas son: ${numeroPalabras.toString()}`
    
    }
    Palindroma(){
        let result = document.getElementById("result")
        let log=0,inicial=0,bandera=true
        let cadena= result.value
        log=cadena.length -1
        console.log(cadena[inicial])
        console.log(cadena[log])
        while(inicial < log ){
            if (cadena[inicial] != cadena[log]){
                bandera= false
            }
            log--
            inicial++
        }
        if (bandera == true){
            result.value='la palabra es palindroma'
        } else{
            result.value='la palabra no es palindroma'
        }
    }
    insertarElemento(){
        let result = document.getElementById("result")
       let arreglo = result.value
       arreglo = arreglo.split(";")
       let pos = 0
       console.log(arreglo)
       let num = prompt("ingrese un elemento a insertar")
       console.log(num)
       let resp = arreglo.splice(0,0,num)
          result.value = resp + arreglo
    } 
}
let cal = new calculadora()