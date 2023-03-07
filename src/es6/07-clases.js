//Declarando
class User{}

//instancia de una clase
const NewUser = new User()


class user{
    //mettodos
    greeting(){
        return 'Hello'
    }
}

const gndx = new user()

console.log(gndx.greeting())

//Constructor

class usser{
    constructor(){
        console.log("Nuevo usuario")
    }
    greeting(){
        return 'hell0'
    }
}

const david = new usser()

//this
//hace referencia al elemnto padre que lo contiene

class user{
    constructor(name){
        this.name = name
    }
    //metodos
    speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting())

class tePromer{
    constructor(name){
        this.name = name
    }
    tuPuedes(){
        return 'Vas bien'
    }
    mensaje(){
        return `${this.tuPuedes()} ${this.name}`
    }
}

const Oscar = new tePromer('Rubio')
console.log(Oscar.mensaje())

//setter getters

class user{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    //leer un valor y obtenerlo
    get uAge(){
        return this.age
    }
    //se pasa el valor a cambiar
    set uAge(n){
        this.age = n
    }
}

const bebeloper = new user('Oscar', 29)
console.log(bebeloper.uAge) //gett
console.log(bebeloper.uAge = 30) //sett


class person{
    constructor(name){
        this.name = name
    }
    bienvenid(){
        return 'Bienvenido'
    }
    mensaje(){
        return `${this.bienvenid()} ${this.name}`
    }
    get gName(){
       return this.name
    }

    set sName(n){
        return this.name = n
    }
}

const newPersona = new person('Rubio')
console.log(newPersona.mensaje())
console.log(newPersona.gName)
console.log(newPersona.sName='Franco')
