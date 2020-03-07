var playerScore = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var crystalValue = [];


//19-120
randomNumber = Math.floor(Math.random() * 101) + 19

$("#random").text(randomNumber);
$("#wins").text(wins);
$("#losses").text(losses);
$("#sum").text(playerScore)

crystalValue.push(Math.floor(Math.random() * 11) + 1);
crystalValue.push(Math.floor(Math.random() * 11) + 1);
crystalValue.push(Math.floor(Math.random() * 11) + 1);
crystalValue.push(Math.floor(Math.random() * 11) + 1);

$(".crystal").on("click", function () {
   // console.log("something")
    var getIndex = $(this).attr("data-index");
   // console.log(crystalValue[getIndex])
    playerScore += crystalValue[getIndex];
   // console.log(playerScore)
    $("#sum").text(playerScore);

    if (playerScore === randomNumber) {
        wins++;
        $("#wins").html(wins);
        reset();

    }
    if (playerScore > randomNumber) {
        losses++;
        $("#losses").html(losses);
        reset();
    }


});


function reset() {
    crystalValue = []
    crystalValue.push(Math.floor(Math.random() * 11) + 1)
    crystalValue.push(Math.floor(Math.random() * 11) + 1)
    crystalValue.push(Math.floor(Math.random() * 11) + 1)
    crystalValue.push(Math.floor(Math.random() * 11) + 1)
    randomNumber = Math.floor(Math.random() * 101) + 19

    playerScore = 0
    $("#sum").text(playerScore);
    $("#random").text(randomNumber);

};


