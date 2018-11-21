//function for inclusive random number between max and min
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
    
}

$(document).ready(function(){
    $("#randomButton").click(function(){
        $("#result").html(randomNumber(1,6));
    });
});
