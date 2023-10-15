var arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arreglo)
console.log(arreglo.length)
// ******
var arreglo2 = ["elemento1", "elemento2", "elemento3"];
console.log(arreglo2)
console.log(arreglo2.length)
console.log("testing".charAt(2))
console.log(arreglo2.at(-1))
 
// ****** forEach

 var arreglo = ["Hola", "Que tal", "Como te va"];
     arreglo.forEach(function(elem){
        console.log(elem)
     })

var arreglo2 = ["Hello", "Hi", "How are you"];
     arreglo2.forEach(function(elem, indice, array){
        elem = elem + " a"
        console.log(elem, indice, array)
     })

// ****** map
var arreglo3 = ["Hi you", "Hola tu", "Que dices"];
     var otro= arreglo3.map(function(elem, indice, array){
        elem = elem + " " + indice;
        console.log(elem, array)
        return elem
     })
     console.log(otro)

// ****** filter

var arreglo4 = ["Hello", "Adios", "How are you"];
   var filtrados= arreglo4.filter(function(elem){
   if(elem.length === 5) return elem
})
console.log(filtrados)

var numeros = [1,3,2,3,4,3,5,6,8,9];
    var filtrados= numeros.filter(function(elem){
    //if(elem === 3) return elem
    var residuo = elem % 2
    if(residuo === 0) return elem
 })
 console.log(filtrados)

var nume = [1, 2, 3, 4];
    var total = nume.reduce (function (acum, elem) {
      acum = acum + elem
      return acum
   })
   console.log(total)

/// **** arr.push

var arr = [1,2,3]
   console.log(arr)
   var prueba = arr.push(7);
   console.log(prueba)
   console.log(arr)

   var prueba2 = arr.pop();  //aqui se elimina el ultimo elemento
   console.log(arr)
   console.log(prueba2) // muestra el elemento que fue eliminado
   console.log(arr)   

   var prueba3 = arr.unshift(0);  //agrega un elemento al principio
   console.log(arr)
   console.log(prueba3) // devuelve la cantidad de elementos
   console.log(arr)   

   var prueba4 = arr.shift();  //borraa un elemento al principio
   console.log(arr)
   console.log(prueba4) // devuelve el elemento que fue borrado
   console.log(arr)   

// ****** arguments ******

function saludar (props) {
 // function saludar ( ... props) {
 // function saludar (idioma, nombre, saludo) {
 // console.log(arguments.length)
 // console.log(arguments)
 // console.log(arguments[0])
 // console.log(props)
 arguments
 // return "Hola"
 // return arguments[]
 return props
}
 console.log(saludar("Español","Rafa","Como estas?" ))

