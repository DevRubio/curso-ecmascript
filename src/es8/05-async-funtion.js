const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=> resolve('Asyncs'), 2000)
            :reject(new Error('Error!'))
    })
}

const anotherFn = async ()=>{
    const something = await fnAsync();
    console.log(something)
    console.log('Hello')
}

console.log('Before')
anotherFn()
console.log('After')













const teprometo = ()=>{
    return new Promise((response,reject)=>{
        if(true){
            response('Promesa cumplida')
        }else{
            reject('No se cumplio la promesa')
        }
    })
}

teprometo().then(response=>(console.log(response))).catch(err=>console.log(err))