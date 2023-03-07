/*import hello from "./module.mjs";

hello()
*/

import { getData } from "./module.mjs";

export function solution(){
    getData()
        .then(response => console.log(response))
}
solution()