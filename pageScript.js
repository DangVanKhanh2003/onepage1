$(document).ready(function(){
    $('.video-tag').find("video").hide();
    $(".text-content-tag").hide();
    $('.video-tag').mouseenter(function(){
        $(this).find(".text-top-tag").css("color", "white");
        $(this).find(".number-tag").css("color", "white");
        $(this).find("video").show();
        $(this).find("video")[0].play();
        $(this).find(".text-content-tag").show( function(){
            $(this).animate({bottom: '130px'}, "fast");
        });


    });
    
    $('.video-tag').mouseleave(function(){
        $(this).find(".text-content-tag").hide();
        $(this).find(".text-content-tag").css("bottom", "100px");
        $(this).find("video").hide();
        $(this).find(".text-top-tag").css("color", "black");
        $(this).find(".number-tag").css("color", "black");
    });
    
    
})