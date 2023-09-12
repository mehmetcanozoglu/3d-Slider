let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let box = document.querySelector('.box')

let degres = 0;

prev.addEventListener('click', function(){
    degres += 45;
    box.style = ` transform: perspective(1000px) rotateY(${degres}deg)`;

}) 

next.addEventListener('click', function(){
    degres -= 45;
    box.style = ` transform: perspective(1000px) rotateY(${degres}deg)`

})