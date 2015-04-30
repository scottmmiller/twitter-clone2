'use strict';

$(document).ready(function() {
    
    $('#tweet-controls').hide();                  //STEP 1
    
    $('.tweet-compose').on('focus', function() {    //STEP 2
        $(this).animate({height: '5em'});
        $('#tweet-controls').show();
    });
    
    $('.tweet-compose').on('blur', function() {    //STEP 2
        $(this).animate({height: '2.5em'});
        $('#tweet-controls').hide();
    });    
    
    $('.tweet-compose').keyup(function() {      //STEP 3
            console.log('tweet-compose.length', $('.tweet-compose').val().length);
        var charCount = 20-$('.tweet-compose').val().length;
             console.log('charCount: ', charCount);
        $('#char-count').html(charCount);
        if(charCount <= 10) {
            $('#char-count').css('color', 'red');
        }
        else {
            $('#char-count').css('color', 'inherit')
        }
        
        if(charCount >= 140 || charCount < 0) {          //STEP 4
            $('#tweet-submit').attr('disabled', true);
        }
        else {
            $('#tweet-submit').removeAttr('disabled');
        }
    });
    
    $('#tweet-submit .button').click(function() {
        var tweetText = $('.tweet:first').clone();
        
    });
    
    
});