const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
     "A", "B", "C", "D", "E", "F"];

     //hex color consists of # and 6 values (0-9), and letters 
        //(think of math, A = 10, B=11m, etc.)
        //#f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    let hexColor = '#';

    //setting up loop 6 times for each value in hex, whats why we're using let
        //instead of const

        //must have the += we would override in each and every iteration, not adding
            //to the last loop; += means you are generating a string of values
    
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

//function to make it random values
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
