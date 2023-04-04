let itemInput = document.getElementById("itemInput");
let outputUl = document.getElementById("outputUl");
let outputUl1 = document.getElementById("outputUl1");

itemInput.addEventListener("keydown",(e)=>{
   if(e.altKey && e.key === "l"){
    outputUl.innerHTML += `
     <li> ${itemInput.value} </li>
    `
   }

   if( e.altKey && e.key === "r"){
    outputUl1.innerHTML += `
     <li> ${itemInput.value} </li>
    `
   }
})