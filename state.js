const generator = document.querySelector(".generator")

generator.addEventListener( "click" , generatorfunction)

function generatorfunction() {
   const minnum = document.querySelector(".minnum").value;
   const maxnum = document.querySelector(".maxnum").value;

   let random = Math.floor( Math.random() * parseInt(maxnum) );

   if (random >= parseInt(minnum)) {
     let generateinh = document.querySelector(".generate");
     generateinh.innerHTML = random;
   };
};
