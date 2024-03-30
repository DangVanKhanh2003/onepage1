$(document).ready(function(){
    $('.contact').hide();

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
    $('#menuElemHome').click(function(){
        $('html, body').animate({scrollTop: $('.home').offset().top }, 1000);
    });
    $('#menuElemServices').click(function(){
        $('html, body').animate({scrollTop: $('#services').offset().top - 100}, 1000);
    });
    $('#menuElemAboutUs').click(function(){
        $('html, body').animate({scrollTop: $('#about_us').offset().top - 100}, 1000);
    });
    $('#menuElemProject').click(function(){
        $('html, body').animate({scrollTop: $('#project').offset().top - 100}, 1000);
    });
    $('#menuElemExpo2030').click(function(){
        $('html, body').animate({scrollTop: $('#expo2030').offset().top - 100}, 1000);
    });
    $('#menuElemPartners').click(function(){
        $('html, body').animate({scrollTop: $('#Ecological_construction').offset().top + 100}, 1000);
    })
    $(".contact #btn_cancel").click(function(){
        $(".contact").hide();
        $('.header').show();
        $('.content').show();
        $('.footer').show();
    })

    $(".contact #contact-btnSend").click(function(){
        alert("Đã gửi thành công dữ liệu lên hệ thông. Chúng tôi sẽ sớm liên hệ với bạn.");
        $(".inputOneLine > input").val("");
        $(".inputMUtilLine > textarea").val("");
        $("#contact-inputName").attr("placeholder" , "Name");
        $("#contact-inputEmail").attr("placeholder" , "Email");
        $("#contact-inputPhoneNumber").attr("placeholder" , "Phone number");
        $("#contact-inputMassage").attr("placeholder" , "Your Massage");
    })
    $(".btn").click(function(){
        $(".contact").show();
        $('.header').hide();
        $('.content').hide();
        $('.footer').hide();
    })
})