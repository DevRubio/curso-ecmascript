const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if(!true){
            resolve('Hey!!')
        }else{
            reject('Whooooooops!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))


const Animals = (oneAnimal) =>{
    let ani = oneAnimal
    return new Promise((response, reject)=>{
        if(ani='gato'){
            response('Un gato')
        }if(ani='perro'){
            response('un perrrito')
        }else{
            reject('No esta el Animal')
        }
    })
}

Animals()
    .then(response => console.log(response))
    .catch(error => console.log(error))


const tePrometo = ()=>{
    return new Promise((response, reject)=>{
        if(true){
            response('Promesa cumplida')
        }else{
            reject('No se cumplio la promesa')
        }
    })
}

tePrometo().then(response=>console.log(response)).catch(err=>console.log(err))