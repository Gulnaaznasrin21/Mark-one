var readlinesync = require("readline-sync");
var user = readlinesync.question("Please enter your name:");
console.log("Welcome",user,"Do you know Gulnaaz?");
var guessmyname = readlinesync.question("yes/no");
var score = 0
function myname(name){
    if (name === "yes"){
    console.log("Thanks for knowing about Gulnaaz!");
    score = score + 1;
    console.log("your score is :",score);
    }
    else{
        scrore = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is :",score);
    }
}
myname(guessmyname);

var guessmyage = readlinesync.questionInt("cann you please guess about my age!!");
function myage(age){
    if (age === 20){
        console.log("good guess...")
        score = score + 1;
        console.log("your score is :",score);
    }else{
        score = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is :",score);
    }
}
myage(guessmyage);

function myfavouritecar(carname){
    if (carname === "BMW"){
        console.log("you are right!");
        score = score + 1;
        console.log("your score is:",score);
    }else{
        score = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is:",score);
    }
}
myfavouritecar(readlinesync.question("My favourite car is:BMW/SAFARI"));

function myfavouriteplace(placename){
    if (placename === "kashmeer"){
        console.log("such a good answer...");
        score = score + 1;
        console.log("your score is :",score);
    }else{
        score = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is :",score);
    }
}
myfavouriteplace(readlinesync.question("which place Gulnaaz like to visit most : goa or kashmeer"));

function myfavouritecolour(colour){
    if (colour === "black"){
        console.log("correct...");
        score = score + 1;
        console.log("your score is :",score);
    }else{
        score = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is :",score)
    }
}
myfavouritecolour(readlinesync.question("what is my favourite colour: blue/black"));

function myfavouritegame(game){
    if (game === "musicchair"){
        console.log("Perfect");
        score = score + 1;
        console.log("your score is :",score);
    }else{
        score = score - 1;
        console.log("you are wrong..so your score will be decreased by 1");
        console.log("your score is :",score)
    }
}
myfavouritegame(readlinesync.question("what is my favourite game : badminton/musicchair"));

console.log("out of 6 your score is",score,":",score,"/","6")


console.log("**Thank you so much for giving your time**")

