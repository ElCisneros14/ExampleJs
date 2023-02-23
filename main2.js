let contador = document.getElementById('contador');
let boton = document.getElementById('boton');


//boton.onclick = function() {
 //   contador.innerHTML = parseInt(contador.innerHTML) + 1   
//}


boton.addEventListener('click', function(){
contador.innerHTML = parseInt(contador.innerHTML) + 1 

})

console.log(contador);
console.log(boton);