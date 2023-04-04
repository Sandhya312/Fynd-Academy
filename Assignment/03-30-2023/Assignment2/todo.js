let itemInput = document.getElementById("itemInput");
let outputUl = document.getElementById("outputUl");
let outputUl1 = document.getElementById("outputUl1");

itemInput.addEventListener("keydown",(e)=>{
   if(e.ctrlKey && e.key === "a"){
    console.log("A");
    outputUl.innerHTML += `
     <li> ${itemInput.value} </li>
    `
   }

   if(e.ctrlKey && e.key === "s"){
    console.log("A1");
    outputUl1.innerHTML += `
     <li> ${itemInput.value} </li>
    `
   }
})