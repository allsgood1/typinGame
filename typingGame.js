$(document).ready(function() {

//----------------Variables---------------------------//

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var sentenceIndex = 0;

var letterIndex = 0;



    $('#keyboard-upper-container').hide();

$(document).keydown(function (event){

var keyDown = event.which;
if (keyDown === 16) {
    $("#keyboard-upper-container").show();
    $("#keyboard-lower-container").hide();
};

});

$(document).keyup(function (event) {
    var keyUp = event.which;
    if (keyUp === 16){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();

    }
    $('.highlight').removeClass('highlight');
})

$(document).keypress(function (event){
    var keyPress = event.which;
    $('#' + keyPress).addClass('highlight');
    var currentSentence = sentences[sentenceIndex];
    var currentLetter = currentSentence[letterIndex];

    if (start == undefined) {
        start = event.timeStamp;
    };
    $("#highlightBlock").css("left", "+=17.5px");

    // letterIndex++;
    // var nextLetter = currentSentence[letterIndex];
    // currentLetterDiv.text(nextLetter);

    // if (letterIndex < currentSentence.length -1) {
    //     if (event.which === currentSentence.charCodeAt()) {
    //         $("#feedback").append("<span class = ' glyphicon glyphicon-ok'></span>")
    //     } else {
    //         $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>")
    //         // errors++;
    //     }
    // }


});









})