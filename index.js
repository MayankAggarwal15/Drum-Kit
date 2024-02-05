

// for (var i = 0; i < buttons.length ; i++) 
// {
    //     buttons[i].addEventListener("click" , clickMe);
    // }
    
    // function clickMe()
    // {
        //     alert("I got Clicked"); 
        // }


// for (var i = 0; i < drum_buttons.length ; i++) 
// {

//     drum_buttons[i].addEventListener("click" , function ()
//     {
//         this.style.color = "white";
//     }

//     );
// }

        
var drum_buttons = document.querySelectorAll(".drum");

for (var i = 0; i < drum_buttons.length ; i++) 
{
    drum_buttons[i].addEventListener("click" , function ()
    {
        var button_text = this.textContent;

        makeSound(button_text);
        buttonAnimation(button_text);
        
    }

    );
}


document.addEventListener("keypress" , function (event) 
{
    makeSound(event.key);
    buttonAnimation(event.key);
}
)



function makeSound(key)
{
    switch (key) 
        {
            case "w":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;

            case "a":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;

            case "s":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;


            case "d":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;

            
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;
        
            default:
                console.log(button_text);
                break;
        }
}


function buttonAnimation(current_key)
{
    var active_button = document.querySelector("." + current_key);

    active_button.classList.add("pressed");

    setTimeout(function () {
        active_button.classList.remove("pressed");
    } , 100)

}