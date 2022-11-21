$(window).scroll(function () {
    if ($(window).scrollTop() >= $('.carousel').height()) {
    $('.navbar').css('background','rgb(34, 37, 41)');
    } else if($(window).scrollTop() > 0 && $(window).scrollTop() <= $('.carousel').height()) {
        $('.navbar').css({'background':'transparent', "backdrop-filter": 'blur(10px)'});
    } else {
    $('.navbar').css('background','transparent');
    }
    });
