async function* anotherGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const ather = anotherGenerator()
ather.next().then(response => console.log(response.value))
ather.next().then(response => console.log(response.value))
ather.next().then(response => console.log(response.value))
console.log("HEllo!")

async function arrayOfNames(array){
    for (let value of array){
        console.log(value)
    }
}

const names = arrayOfNames(['oscar', 'fabian', 'rubio', 'franco'])
console.log('After')