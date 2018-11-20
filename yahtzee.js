var randomDice = [1,2,3,4,5,6];

function randomNumber(){
    Math.floor(Math.random(6));
}

$(document).ready(function(){
    $("#randomButton").click(function(){
        $("#result").html(randomNumber());
    });
});
