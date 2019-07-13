$(document).ready(function(){
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let i = 0;
    let kpi = 0;
    let currSen = sentences[i];

    $('#sentence').text(currSen);
    $('#keyboard-upper-container').hide();
    $('#target-letter').text(currSen.charAt(kpi));

    $(document).keydown(function(event){
        if (event.which == 16) { 
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
        
    });
    $(document).keyup(function(event){
        if (event.which == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        }
        $('.key').removeClass('hl-letter');
        kpi ++;
        $('#target-letter').text(currSen.charAt(kpi));
    });
    $(document).keypress(function (event){
        $('#'+event.which).addClass('hl-letter');
    });
    
    
    
});