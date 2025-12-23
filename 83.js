/*         innerText vs innerHTML
---------------------------------------------
| Property      |  Description              |
|-------------------------------------------| 
| innerText     |  returns plain text       |
| innerHTML     | returns plain text + tags | 
---------------------------------------------     */

let h = document.getElementById('heading')
console.log(h.innerHTML);

console.log(h.innerText);

