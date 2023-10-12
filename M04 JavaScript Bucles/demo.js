// Bucles

// Lista de canciones -- finitos
// pista de atletismo -- infinitos

// ***** For *****
for (var persona = 0; persona < 2; persona++) {
    console.log ("Que viva el rock and roll!")
}

function suma (numInicial, numFinal) {
    var suma = 0
    for (var i = numInicial; i <= numFinal; i++)
    suma = suma + i
return suma
}
console.log(suma(1,4))


function sumaPar (nInicial, nFinal) {
    var suma = 0
    for (var r = nInicial; r <= nFinal; r++)
     if(r % 2 === 0) suma = suma + r
return suma
}
console.log(sumaPar(1,4))


var string = "Hola Mundo";
   for (var i = 0; i < string.length; i++) {
    var letra = string.charAt(i);
   }
console.log(string.charAt(0))

//____________________________________________________
// bucle infinito
// for (var i = 0; i > 0; i++) ***NUNCA HACER ESTO***
//____________________________________________________

var count = 1;
do {
    console.log("Es digito: " + count)
    count++
}
while(count<6)

var numero = 6;
while (numero > 2){
    numero = numero - 1;
    console.log(numero)
}

var num = 0
do {
    console.log("numeral " + num)
    num++
   }
while (num < 2)

function numerox(nm) {
switch (nm) {
    case 1:
        return "Es uno"
    case 2:
        return "Es dos"
    default:
        return "Es otro numero"
}
}
console.log(numerox(3))

var canciones = ["Meta", "IronMaiden", "Kiss"];
console.log(canciones[2]);
for (i = 0; i < canciones.length; i++){
    var cancion = canciones[i]
    console.log(cancion)
}
