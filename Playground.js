///////////////Playground - Calcula la propina/////////////////
/*
En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.

Recibirás 2 parámetros:

billAmount: El costo total de lo que hayan consumido.
tipPercentage: El porcentaje de propina que deban dejar.
Ambos valores serán de tipo Number.
Los valores serán siempre positivos incluyendo el 0.
deberá devolver el valor de la propina como un número.
Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: calculateTip(100, 10);
Output: 10;

Ejemplo 2:

Input: calculateTip(1524.33, 25);
Output: 381.0825;
*/

function calculateTip(billAmount, tipPercentage){
    if((billAmount >= 0) & (tipPercentage >= 0)){
        return (billAmount*tipPercentage)/100
    }
    return 'Solo se admiten numeros positivos'
}
calculateTip(400.25, 25)
var resul = calculateTip(400.25, 25)
console.log(resul)

/////////Playground - Calcula años bisiestos ////////////////


/* 
En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

Es divisible por 4, pero no por 100.
Es divisible por 100 y por 400.
La función isLeapYear recibe un único parámetro: el año a evaluar. Debe devolver true si el año es bisiesto o false en caso contrario.

Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.
 
Ejemplo 1:

Input: 2000;
Output: true;

Ejemplo 2:

Input: -2024;
Output: false;

Ejemplo 3:

Input: 1984.25;
Output: false;
*/

function isLeapYear(year){
    if((Number.isInteger(year/4) & year>=0) || (Number.isInteger(year/100))){
        return true
    }
    return false  
}
console.log(isLeapYear(2000))

let anio = 3000;
let esBisiesto = new Date(anio, 1, 29).getMonth() == 1;
console.log(esBisiesto);


/*
En este desafío recibirás una serie de tipos de mascotas junto con su edad.

Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

La función recibirá las siguientes mascotas:

perro
gato
ave
En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"

Para cada tipo de mascota, la función retornará diferente información basada en la edad.

Perros
Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"
gatos
Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"
aves
Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: getPetExerciseInfo("perro", 3)
Output: "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"

Ejemplo 2:

Input: getPetExerciseInfo("gato", 8)
Output: "Los gatos viejos necesitan sesiones de juego más cortas"

Ejemplo 3:

Input: getPetExerciseInfo("Mamut", 25)
Output: "Tipo de mascota invalida"
*/

export function getPetExerciseInfo(type, age) {

    // Tu Código aquí 👈
    switch(type){
        case 'perro':
            if(age < 1){
                return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego'
            }else if(age >=1 & age <=7){
                return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego'
            }   
            return 'Los perros viejos necesitan caminatas más cortas'
            break

        case 'gato':
            if(age < 1){
                return 'Los gatitos necesitan frecuentes sesiones de juego'
            }else if(age >=1 & age <=7){
                return 'Los gatos a esta edad necesitan jugar diariamente'
            }   
            return 'Los gatos viejos necesitan sesiones de juego más cortas'
            break
        case 'ave':
            if(age < 1){
                return 'Las aves jóvenes necesitan mucho espacio para volar'
            }else if(age >=1 & age <=7){
                return 'Las aves necesitan jugar diariamente y un lugar para volar'
            }   
            return '"Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar'
            break
        default:
        return 'Tipo de mascota inválida'
    }
}

console.log(getPetExerciseInfo('ave', 10))


////////////Playground - Dibuja un triangulo/////////////////

function paintTrian(size, character){
    let i = 1
    let space = " "
    for(i=1; i<=size; i++){
        console.log(space.repeat(size-i)+character.repeat(i))
        //return `${space.repeat(size-i)} ${character.repeat(i)}`
    }
}

console.log(paintTrian(25,"*"))

export function printTriangle1(size, character) {
    // Tu código aquí 👈
    let i = 1
    let space = " "
    let triangulo =''
    for (i = 1; i <= size; i++) {
      triangulo += space.repeat(size - i) + character.repeat(i) 
      console.log(space.repeat(size-i)+character.repeat(i))  
    }
    return triangulo
  }
console.log( printTriangle1(5, "*"))

/////////////////
export function printTriangle(size, character) {
    const triangle = [];
    for (let i = 1; i <= size; i++) {
      let spaces = " ".repeat(size - i);
      let characters = character.repeat(i);
      let figure = `${spaces}${characters}`;
      triangle.push(figure);
    }
  
    return triangle.join("\n");
  }

console.log(printTriangle(5,"#"))
  /////////////////////

const numeros = [1,2,3,4,5,6]
const cuadrados = numeros.map(
    function(numero){
        return numero * numero
    }
)
console.log(cuadrados)

/////
const numeros2 = [1,2,3,4,5]
const suma = numeros2.reduce(function(acomulador, numero){
    return acomulador +numero
})
console.log(suma)

////////////////////

export function findFamousCats(cats) {
    let obj = {};

    cats.forEach(element => {
        return obj[element.name] = element.followers.reduce((a,b) => a+b)   
    });

    let max = Math.max(...Object.values(obj));
    return(Object.keys(obj).filter(key => obj[key] === max));
};
 
console.log(findFamousCats([
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300,601]
    },
]))


