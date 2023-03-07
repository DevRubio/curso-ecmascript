/*const hello = () =>{
    console.log('Hello!')
}

export default hello;
*/

export async function getData(){
    return new Promise((Resolve)=>{
        setTimeout(()=>{
            Resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mrs. Michi"
            },{
                movie: '101 Michis',
                year: 2019,
                protagonist: 'Tommy michiguire'
            }])
        }, 1000)
    })
}
