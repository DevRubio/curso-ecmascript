// enahced object literals

function newUser(user, age, country){
    return{
        user,
        age,
        country,
    }
}

console.log(newUser('Rubio',34,'CO'))