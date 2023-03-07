/*IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. 
Esta función es anónima y no se puede reutilizar.*/
(function () {
    console.log("Soy una IIFE");
  })();

/*Función expresión */
let saluda = function () {
    console.log("Hola");
  };
  
  saluda();

/*Arrow function: una función que se define utilizando la sintaxis () =>. 
Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.*/
let saluda2 = () => console.log("Hola");
saluda2();


////////////////////////////////

export function solution(valor){
    return typeof valor
}

const result = solution(true)
console.log(result)

//////////////////////////
const simbolo = Symbol()

let perrito ={
    name: 'Firulaies',
    edad: 3,
    [simbolo]: 'Id Unico'
}

console.log(perrito[simbolo])
console.log(simbolo)

////////Operadores de asignación////////////////
let x = 10
x+=5
console.log(x)
x-=3
console.log(x)
x*=2
console.log(x)
x/=4
console.log(x)