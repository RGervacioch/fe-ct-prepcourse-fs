/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) { 
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array[0])
   var primerElemento = array[0]
   return primerElemento
   // también se puede usar array.shift
   }
   console.log(devolverPrimerElemento([1,2,3]))

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array.at(-1))
   var ultimoElemento = array.at([-1])
   return ultimoElemento
   // también se puede usar array.pop
}
console.log(devolverUltimoElemento([1,2,3]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var longitud = array.length
   return longitud
   //return array.length
}
console.log(obtenerLargoDelArray([1,true,3]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arrayMasUno = array.map(function (elem) {
      elem = elem + 1
      return elem
   })
   return arrayMasUno
}
console.log(incrementarPorUno([1,2,3,4]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento)
   return array
}
console.log(agregarItemAlFinalDelArray([1,2,3,4],5))

function agregarItemAlComienzoDelArray(array2, elemento2) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array2.unshift (elemento2)
   return array2
}
console.log(agregarItemAlComienzoDelArray([2,3,4],1))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   console.log(palabras.join(" "));
   return palabras.join(" ")
   // var frase = palabras.join(" ")
   // return frase;
}
console.log(dePalabrasAFrase(["Hoy", "es un dia", "maravilloso!"]))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
return array.includes(elemento)
   // var validate = array.includes(elemento)
   // return validate
   //* let contiene=false
   //* array.forEach((elem)function{
   //* if (elem === elemento){
   //* contiene = true
   //* }
   //* })
   //* return contiene
}
console.log(arrayContiene([1,2,3,4], 3))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function(acum, elem){
      acum = acum + elem // para multiplicar, agregar ,1 en:  },1) 
      return acum
   })
}
console.log(agregarNumeros([1,2,3,4]))

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
      var nuevo = resultadosTest.reduce(function(acum, elem){
            acum = acum + elem
            return acum
   })
            console.log(nuevo);
      var totElementos =resultadosTest.length;
            console.log(totElementos);
      var promedio = nuevo / totElementos
            return promedio; 
 }
console.log(promedioResultadosTest([7,8,9,10]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroGrande = arrayOfNums[0]
   arrayOfNums.forEach(function(elem) {
      if (elem > numeroGrande) numeroGrande = elem
      // console.log(... arrayOfNums) desempaca elementos fuera de un array
      // console.log(Math.max( ... arrayOfNums))
      // return Math.max( ... arrayOfNums)
   });
   return numeroGrande
}
console.log(numeroMasGrande([2,3,77,4,22,1]))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   // - Aplica solo a la primer instrucción: var producto = 1
   // - Aplica solo a la primer instrucción: for (var i=0; i<arguments.length; i++){
   // - Aplica solo a la primer instrucción: producto = producto * arguments[i]
   // - Aplica solo a la primer instrucción: }
   // - Aplica solo a la primer instrucción: return producto
   var longitudDeArguments = arguments.length
   if (longitudDeArguments === 0) return 0
      if (longitudDeArguments === 1) return arguments[0];
   var producto = 1
   for (var i=0; i < longitudDeArguments; i++){
      producto = producto * arguments[i];
}
return producto
}
console.log(multiplicarArgumentos(6,2))

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var filtrados = array.filter(function(elem){
      return elem > 18
   })
   return filtrados.length  // escribir sin .length mostrara los elementos > a 18
}
console.log(cuentoElementos([20,18,15,76,12,56,32]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia < 1 || numeroDeDia > 7) return "Numero invalido"
   if (numeroDeDia === 1 || numeroDeDia === 7)
   return "Es fin de semana"
   return "Es dia laboral"
}
console.log(diaDeLaSemana(1))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroEnString = num.toString()
   var primerValor = numeroEnString.at(0)
   if (primerValor === "9")
   return true
   return false
}
console.log(empiezaConNueve(90))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
      return array.every(function (elem){
      return elem === array[0]
   })
}
console.log(todosIguales([2,2,2]))


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesFiltrados = array.filter(function (elem) {
      if (elem === "Enero" && elem === "Marzo" && "Noviembre")
      return elem
   });
      console.log(mesesFiltrados)
      var conjunto = new Set(mesesFiltrados)
      console.log(conjunto)
      var arregloEmpaquetado = [ ... conjunto];
      console.log(arregloEmpaquetado)
      
      if (arregloEmpaquetado.length < 3)
        return "No se encontraron los meses pedidos";
        return arregloEmpaquetado;
}
console.log(mesesDelAño(["Enero", "Febrero", "Marzo", "Abril", "Enero"]))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = []
      for (i=0; i<11; i++){
      var operacion = 6 * i;
      tabla.push(operacion)
}     return tabla
}
console.log(tablaDelSeis([6]))

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayCien = array.filter(function (elem){
      if (elem >100) return elem
   })
   return mayCien
}
console.log(mayorACien([3,78,99,100,200,4,201, 13456678]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
