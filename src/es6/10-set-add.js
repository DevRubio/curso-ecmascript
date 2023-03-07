const list = new Set()
//agregando valores a la lista
list.add('item 1')
list.add('item 2').add('item 3')

//verifcar si un valor existe en la lista
console.log(list.has('item 2'))

//eliminar valores de la lista

list.delete('item 2')

//mostrar tamaño de la lista

console.log(list.size)

console.log(list)