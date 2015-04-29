'use strict';

$(document).ready(function() {
    
    $('#tweet-controls').hide();                  //STEP 1
    
    $('.tweet-compose').on('click', function() {    //STEP 2
        $(this).animate({height: '5em'});
        $('#tweet-controls').show();
    });
    
//    $('.tweet-compose').off('click', function() {
//        $(this).animate({height: '2.5em'});
//        $('#tweet-controls').hide();
//    });    
//    
    $('.tweet-compose').keyup(function() {      //STEP 3
            console.log('tweet-compose.length', $('.tweet-compose').val().length);
        var count = 20-$('.tweet-compose').val().length;
             console.log('Count: ', count);
        $('#char-count').html(count);
        if(count <= 10) {
            $('#char-count').css('color', 'red');
        }
        else {
            $('#char-count').css('color', 'inherit')
        }       
        if(count < 0 ) {                        //STEP 4
            $('#tweet-submit .button').prop('disabled', true);
        }
        else {
            $('#tweet-submit .button').prop('disabled', false);
        }
    });
    
    
    
});