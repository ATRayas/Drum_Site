
//adds event listener to all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSoundSwitch(buttonInnerHTML);    

        buttonAni(buttonInnerHTML);

    });


}

document.addEventListener("keypress", function(event) {

    console.log(event.key);
    makeSoundSwitch(event.key);  
    buttonAni(event.key);

})

function buttonAni(key) {
     var actuveBtn = document.querySelector("." + key);
     actuveBtn.classList.add("pressed");

     setTimeout(function(){
        actuveBtn.classList.remove("pressed");
     }, 100);
}

function makeSoundSwitch(a) {
    switch (a) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

        break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

        break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

        break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

        break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

        break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

        break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

        break;

        default:
            console.log();

        break;
    }
}

// practice on making a constructor in javascript and assigning methods to it as well
// function HouseKeeper(yearsofExperience, name, cleanRepo) {
//     this.yearsofExperience = yearsofExperience;
//     this.name = name;
//     this.cleanRepo = cleanRepo;
//     this.clean = function () {
//         alert("Cleaning in progress...");

//     }
// }