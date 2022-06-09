let button = document.querySelector('#image__btn');


var dog = `<img src="./Imgs/animal1.png" alt=""/>`;
var pig = `<img src="./Imgs/animal2.png" alt=""/>`;
var owl = `<img src="./Imgs/animal3.png" alt=""/>`;

button.addEventListener('click', function(e) {
    e.preventDefault()

   x = Math.floor(Math.random() * 3) +1;
   if(x === 1) {
    flip("dog");
   } else if (x === 2) {
    flip("pig")
   }  else {
    flip("owl")
   }

})

function flip(animal) {
console.log(animal);
}



