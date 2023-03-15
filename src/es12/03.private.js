class user{
    //constructor
    constructor(name, age){
        this.name = name
        this.age = age
    }

    //metodos
    #speak(){
        return 'Hello'
    }

    greeting(){
        return `${this.#speak()} ${this.name}`
    }

    get #uAge(){
        return this.age
    }
    set #uAge(a){
        this.age = a
    }
}

const bebeloper = new user("Rubio", 30)
console.log(bebeloper.greeting())
