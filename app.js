$(document).ready(function(){
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let i = 0; //sentence index
    let kpi = 0; //key press index
    let currSen = sentences[i];
    let senLen = currSen.length;
    let mistakes = 0;
    let numberOfWords = 54;
    let startTime = 0;
    let endTime = 0;

    $('#sentence').text(currSen);
    $('#keyboard-upper-container').hide();
    $('#target-letter').text(currSen.charAt(kpi));

    $(document).one("keydown", function (event){
        let date = new Date;
        startTime = date.getTime();
        console.log(startTime);
    });

    $(document).keypress(function (event){
        let pressed = event.which;
        let letter = String.fromCharCode(pressed);
        let currLet = currSen.charAt(kpi);
        $('#'+pressed).addClass('hl-letter');
        if (letter == currLet) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else if (letter != currLet) {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            mistakes++;
        }
    });

    $(document).keydown(function(event){
        if (event.which == 16) { 
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        };  
    });

    $(document).keyup(function(event){
        if (event.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        };
        $('.key').removeClass('hl-letter');
        if (event.which > 31){
            kpi ++;
            $('#target-letter').text(currSen.charAt(kpi));
            $('#yellow-block').css("margin-left", "+=17.5");
        };
        
        if (kpi == senLen) {
            i++;
            kpi = 0;
            console.log(i);
            currSen = sentences[i];
            $('#sentence').text(currSen);
            $('#yellow-block').css('margin-left', '0px');
            $('#feedback').empty();
        };
        if (i == 5) {
            let endDate = new Date;
            endTime = endDate.getTime();
            let minutes = (endTime - startTime) / 1000;
            minutes /= 60;
            let wpm = Math.round(numberOfWords / minutes - 2 * mistakes);
            $('#feedback').text('You Scored ' + wpm + ' words per minute');
            $('#target-letter').empty();
            $('#target-letter').delay(3000).append('<button id="reset" class="btn">Play Again?</button>');
            $('#reset').click(function(){
                i = 0;
                kpi = 0
                currSen = sentences[i];
                $('#target-letter').empty();
                $('#feedback').empty();
                $('#target-letter').text(currSen.charAt(kpi));
                $('#sentence').text(currSen);
                $(document).one("keydown", function (event){
                    let date = new Date;
                    startTime = date.getTime();
                    console.log(startTime);
                });
            });
        };
    });

    $()
});