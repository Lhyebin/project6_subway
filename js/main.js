$(function () {


    // <🎈상단배너 슬라이드>
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // <🎈상단배너 슬라이드 : 다음페이지 딜레이표시>
    // $('.main_slide').on('init afterChange', function (e, s, c) {
    //     const current = $('.main_slide .slick-current');
    //     current.addClass('on').siblings().removeClass('on');

    //     $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
    //     $('.main_visual .slide_num strong').text(s.slideCount);

    //     console.log(s.slideCount)

    //     $('.main_visual .menu li').eq(0).addClass('on')
    //     $('.main_visual .menu li').eq(c).addClass('on')
    //         .siblings().removeClass('on');
    // })








    // <🎃베스트메뉴 슬라이드>
    $('.product').slick({
        slidesToShow: 4,
        arrows: false,
    });

    $('.main_product .arrows .left').on('click', function () {
        $('.product').slick('slickPrev')
    })
    $('.main_product .arrows .right').on('click', function () {
        $('.product').slick('slickNext')
    })




    // <😊주문방법>
    $('.content_slide').on('init afterChange', function (e, s, c) {
        console.log(c)
        $('.main_content .itm').eq(c).addClass('on').siblings().removeClass('on')
    })

    $('.content_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
    });



    $('.main_content .tab_arrows .left').on('click', function () {
        $('.content_slide').slick('slickPrev')
    });
    $('.main_content .tab_arrows .right').on('click', function () {
        $('.content_slide').slick('slickNext')
    });


});