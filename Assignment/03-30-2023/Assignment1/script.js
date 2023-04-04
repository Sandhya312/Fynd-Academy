
let typingInput = document.getElementById("typingArea");
let typingOutput = document.getElementById("typingOutput");

typingInput.addEventListener("keyup",()=>{

   typingOutput.innerHTML = typingInput.value;
})

document.getElementById("submit-btn").addEventListener("click",()=>{
   alert("Todos! entry submitted...")
})



