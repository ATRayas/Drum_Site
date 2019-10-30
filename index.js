
//adds event listener to all drum buttons
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    this.style.color = "white";

});


}


function handleClick(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

function HouseKeeper (yearsofExperience, name, cleanRepo){
    this.yearsofExperience = yearsofExperience;
    this.name = name;
    this.cleanRepo = cleanRepo;
}