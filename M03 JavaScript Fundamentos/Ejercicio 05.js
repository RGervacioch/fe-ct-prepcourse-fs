/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) { return "Es positivo" }
   else if (num < 0) { return "Es negativo" } 
   return false
}
var resultado = esPositivo(-1)
console.log(resultado)

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!"
}
var texto = agregarSimboloExclamacion("Hi guys")
console.log(texto)

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return nombre + " " + apellido
}
var texto2 =combinarNombres("Soy", "Rafa")
console.log(texto2)

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola " + nombre + "!"
}
var texto3 =obtenerSaludo("Rafa")
console.log(texto3)

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto * ancho
}
var resultado2 =obtenerAreaRectangulo(3,6)
console.log(resultado2)

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return 4 * lado
}
var resultado3 = retornarPerimetro(3)
console.log(resultado3)

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return (base * altura) / 2
}
var areatriangulo = areaDelTriangulo(4,8)
console.log(areatriangulo)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return euro * 1.20
}
var resultado4 = deEuroAdolar(10)
console.log(resultado4)

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   letra = letra.toUpperCase()
   console.log(letra)
   if (
      letra === "A" || 
      letra === "E" || 
      letra === "I" || 
      letra === "O" || 
      letra === "U"
      ) { 
         return "Es vocal"
        }
   else {
         return "Dato incorrecto"
      }
}
var respu = esVocal("e")
console.log (respu)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
