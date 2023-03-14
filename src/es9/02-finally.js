const anotherfunction = ()=>{
    return new Promise((response, reject)=>{
        if(false){
            response('Promesa cumplida')
        }else{
            reject('Promesa incumplida')
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err=>console.log(err))
    .finally(()=>console.log('finnally'))