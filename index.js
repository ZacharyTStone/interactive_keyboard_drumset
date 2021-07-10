var number_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < (number_of_drum_buttons); i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        // sets the button that trigered the event as the variable.
        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
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
                var wow = new Audio("sounds/wow.mp3");
                wow.play();
                break;

            default:
                break;
        }


    });

}




// function clickEvent() {
//     var tom_1 = new Audio("sounds/tom-1.mp3");
//     tom_1.play();
// }