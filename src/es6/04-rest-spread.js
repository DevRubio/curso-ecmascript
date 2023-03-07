//Arrays destructuring

let fruits = ['Apple', 'Banana']
//let [a,b] = fruits
let [,fruit] = fruits
//console.log(a, b)
console.log(fruit)

//object destructuring
let user = {username:'oscar', age: 34}
let{username, age} = user
console.log(username, age)

//spread operator

let person = {name: 'oscar', age : 28}
let country = 'CO'

let data = {id: 1, ...person, country}
console.log(data)

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

//rest

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num+values[0]
}

sum(1,1,2,3)

//ejercicio
json1 ={name:'Mrs Michi', food: 'Pescado'}
json2= {age: 12,color: 'Blanco'}

function solution(json1, json2) {
    // Tu código aquí 👈
    let resul = {json1, ...json2}
    return resul
   }

console.log(solution(json1,json2))