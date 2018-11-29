//function for inclusive random number between max and min
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
    
}

function diceFunction(diceNumber){
    
}

$(document).ready(function(){
    $("#randomButton").click(function(){
        $("#result1").html(randomNumber(1,6));
    });
});
