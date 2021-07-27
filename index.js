var number_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < (number_of_drum_buttons); i++) {

    // detetcting button presses even listener
    document.querySelectorAll("button")[i].addEventListener("click", function () {


        var buttonInnerHtml = this.innerHTML;

        // sends the button that was clicked
        makeSound(buttonInnerHtml);

        // calls the animation function using the button html aka w , s , etc..

        buttonAnimation(buttonInnerHtml);

    });
}

// detecting keyboard presses event listner
// the event is all the info genertated from keydown

document.addEventListener("keydown", function (event) {

    // makes a sound using the event info from the key press
    makeSound(event.key);

    // calls the animation function using the event info from the key press
    buttonAnimation(event.key)


});

// function that makes sound ring out
function makeSound(key) {
    switch (key) {
        case "w":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "o":
            var wow = new Audio("sounds/wow-f.mp3");
            wow.play();
            break;

            // like the else statment
        default:
            console.log(buttonInnerHtml);
    }
}

function buttonAnimation(currentKey) {

    var pushedButton = document.querySelector("." + currentKey);

    pushedButton.classList.add("pressed");

    setTimeout(function () {
        pushedButton.classList.remove("pressed");

    }, 200)


}