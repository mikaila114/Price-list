import { list } from "./list.js";
console.log(list);

let listHTML = '';

list.forEach((item) => {
   
    listHTML += `<div class="content">
    <div>Category: ${item.name}</div>
    <div>Price: ${item.price}</div>
    <div>Description: ${item.des}</div>
     </div>
    `;
    function btn(){
        console.log('hello')
    }
  
})

document.querySelector('.main-container')
.innerHTML += listHTML;
  