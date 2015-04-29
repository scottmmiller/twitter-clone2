'use strict';

$(document).ready(function() {
    
    $('#tweet-controls').hide();
    
    $('.tweet-compose').on('click', function() {
        $(this).animate({height: '5em'});
        $('#tweet-controls').show();
    });
    
    
    
    
});