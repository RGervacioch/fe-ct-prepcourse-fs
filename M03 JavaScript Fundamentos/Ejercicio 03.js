/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y)
   {return true;}
   else
   {return false;}
   }
var resultado = sonIguales(10,10)
console.log(resultado)

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) return true
   else return false
}
var compara = tienenMismaLongitud("hola", "adios")
console.log(compara)

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   //return num < 90
   if(num < 90) return true
   else return false
}
var resultado2 = menosQueNoventa(88)
console.log(resultado2)

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50
}
var resultado3 = mayorQueCincuenta(499)
console.log(resultado3)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   var residuo = num % 2
   if (residuo === 0) return true
   else return false
}
var resultado4 = esPar(45)
console.log(resultado4)

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   var residuo = num % 2
   if (residuo === 0) return false
   else return true
}
var resultado5 = esImpar(11)
console.log(resultado5)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
