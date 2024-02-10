// Here we create radom number in javascript by using Math.random() in line number 3
// In line number 4 we use Math.floor soo that we can roundoff it (by adding 1 also) and we multiply it with 6 soo that we can get the number upto only 6 .
var randomNumber1 = Math.random();
randomNumber1= Math.floor(randomNumber1*6)+ 1;
var randomdiceImage = "dice" +  randomNumber1 + ".png";
var randomImagesource = "images/" + randomdiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);

// Here we have stared code for generating random number for second number.
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomdiceImage2 = "dice" + randomNumber2 + ".png";
var randomImagesource2 = "images/" + randomdiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesource2);

// Here we are going to write code for win condiction:

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!!";
}
else{
    document.querySelector("h1").innerHTML = "!!!!!DRAW!!!!!";
}