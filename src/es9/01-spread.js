const user = {username: 'Rubio', age: 30, country: 'CO'}
const {username, ... values} = user
console.log(username)
console.log(values)