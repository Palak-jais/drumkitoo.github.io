for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function()
{// click press detected..
   var buttonInnerHTML=this.innerHTML;
   makesound(buttonInnerHTML);
   animationb(buttonInnerHTML);
    
});
}
// keyboard press detected..
document.addEventListener("keypress",function(event){
 makesound(event.key);
 animationb(event.key);
});
function makesound(key)
{
    switch(key)
    {
        case "w":
        var tom1=new Audio("tom-1.mp3");
        tom1.play();
        break;
        case "d":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
        case"s":   
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
            break;
        case"j":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var kick=new Audio("kick-bass.mp3");
            kick.play();
            break;
        case "l":    
            var sna=new Audio("snare.mp3");
            sna.play();
            break;
        case "a":    
            var cra=new Audio("crash.mp3");
            cra.play();
            break; 
        default:
            console.log(buttonInnerHTML);  

        
    }
}
function animationb(currentKey)
{
    var active=document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout (function(){
        active.classList.remove("pressed");
    },100);
}

