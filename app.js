const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //Goal is to get a random number between 0 and 3 colors *color[2]
        //it is an array that's why its 2 and not 3 below
    
    const randomNumber = getRandomNumber();
        console.log(randomNumber);
        
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
})

//this function will generate a random number between 0 and 3
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    //by default, math random returns values between 0 and 1, but not ever being 0 or 1
        //we can multiply this by the size of the colors array to get values from 0 to 4
        //without it ever being 0 or 4

    //math floor rounds down to closest integer, always down!
        //this will give us whole numbers between 0 and 3
}