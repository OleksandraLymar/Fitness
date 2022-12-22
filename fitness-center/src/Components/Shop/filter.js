import {products} from"./products.js"
const filterBox = document.querySelectorAll('.box')
 document.querySelector('ul').addEventListener('click',(event)=>{
     if(event.target.products.className !== 'LI') return false;
//
//     let filterClass = event.target.dataset['f']
//     console.log(filterClass)
//
//     filterBox.forEach(elem =>{
//         if(!elem.classList.contains(filterClass)){
//             elem.classList.add('hide')
//         }
//     })
 } )