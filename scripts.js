import { list } from "./list.js";

let listHTML = '';

list.forEach((item) => {
  listHTML += `<div class="content">
    <div>Category: ${item.name}</div>
    <div>Price: ${item.price}</div>
    <div>Description: ${item.des}</div>
  </div>`;
});

const listContainer = document.querySelector('.list-container');

//  nan ne za ka daura shi a page
listContainer.innerHTML = listHTML;



document.getElementById('button').addEventListener("click", ()=>{

  listHTML = ''; //  important ka reset

  const updated = list.map((des) => {
    return {...des, price: des.price - 50}
  });

  updated.forEach((ol) => {
    listHTML += `
     <div class="content">
      <div>Category: ${ol.name}</div>
      <div>Price: ${ol.price}</div>
      <div>Description: ${ol.des}</div>
</div>
    `;
  });

  //  update page bayan click
  listContainer.innerHTML = listHTML;
});