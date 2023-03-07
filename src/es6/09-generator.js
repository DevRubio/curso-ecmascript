/*Los generados son un tipo especial de funcion
que nos va a retornar una serie de valores segun 
el algoritmo definido*/

function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(['Oscar','Fabian','Rubio','Franco'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

export function* getId() {
    let lastId = 1;
    while (true) {
      yield lastId++;
    }
  }

const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)

//////////////////////////////////////

export function* getCons(){
    let ulti = 1
    while(true){
        yield ulti++
    }
}
const resul = getCons()
console.log(resul.next().value)
console.log(resul.next().value)
console.log(resul.next().value)