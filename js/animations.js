'use strict';

$(document).ready(function() {
    
//HIDE/SHOW/EXPAND TWEET AREA
    $('#tweet-controls').hide();                  //STEP 1
    
    $('#tweet-content .tweet-compose').on('click', function() {    //STEP 2
        $(this).animate({height: '5em'});
        $('#tweet-controls').show();
    });
    
    $('#tweet-content').on('blur', function() {    //STEP 2
        $(this).animate({height: '2.5em'});
        $('#tweet-controls').hide();
    });
    
//EXPAND/SHRINK RETWEET TEXTAREA    
    $('#stream .tweet-compose').on('click', function() {
        $(this).animate({height: '5em'});
    });
    
    $('#stream .tweet-compose').on('blur', function() {
        $(this).animate({height: '2.5em'});
    });
    
    
    $('.tweet-compose').keyup(function() {      //STEP 3
//            console.log('tweet-compose.length', $('.tweet-compose').val().length);
        var charCount = 20-$('.tweet-compose').val().length;
//             console.log('charCount: ', charCount);
        $('#char-count').html(charCount);
        if(charCount <= 10) {
            $('#char-count').css('color', 'red');
        }
        else {
            $('#char-count').css('color', 'inherit');
        }
        
        if(charCount === 139 || charCount < 0) {          //STEP 4
            $('#tweet-submit').attr('disabled', true);
        }
        else {
            $('#tweet-submit').removeAttr('disabled');
        }
    });

//TWEET SUBMIT
    $('#tweet-submit').on('click', function() {     //STEP 5
            console.log("Button Clicked");
        var tweetText = $('#tweet-content .tweet-compose').val();
        var tweetClone = $('#stream .tweet').first().clone();
        
        tweetClone.find('.avatar').attr('src', 'img/alagoon.jpg');
        
        tweetClone.find('.fullname').text('Skoot D');
        tweetClone.find('.username').text('@smmiller99');
        tweetClone.find('.tweet-text').text(tweetText).val(); 
        $('#stream').prepend(tweetClone);
        $('#tweet-content .tweet-compose').animate({height: '2.5em'}).val('');
        $('#char-count').text(140).css('color', 'inherit');
        $('#tweet-controls').hide();
    });
    
    
});