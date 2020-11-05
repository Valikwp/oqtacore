//import cookie from 'jquery.cookie';
import svg4everybody from 'svg4everybody';
import select2 from 'select2';
import 'select2/dist/css/select2.css';


export default function () {
    svg4everybody({});

    $('.hamburger-icon').on('click', function () {
        $(this).addClass('hamburger-icon-active');
        $('.header-block-menu').addClass('header-block-menu-active');
        $('body').addClass('body-menu-active');
    });
    $('.hamburger-icon-close').on('click', function () {
        $(this).removeClass('hamburger-icon-active');
        $('.header-block-menu').removeClass('header-block-menu-active');
        $('body').removeClass('body-menu-active');
    });
    var select2 = $('.select2');
    select2.select2({
        minimumResultsForSearch: -1
    });
    select2.on('select2:selecting', function (e) {

        window.location = e.params.args.data.id;
    });
    $('.faq-item-title').on('click', function () {

        $('.faq-item-content').fadeOut();

        if ($(this).parent().hasClass('faq-item-active')) {
            $(this).parent().find('.faq-item-content').fadeOut();
            $(this).parent().removeClass('faq-item-active');
        } else {
            $(this).parent().find('.faq-item-content').fadeIn();
            $('.faq-item').removeClass('faq-item-active');
            $(this).parent().addClass('faq-item-active');
        }


    });
    if ($(window).width() > 1023) {
        if ($('.sidebar-sticky').length > 0) {
            //sticky sidebar
            var stickyHeight = Math.round($('.sidebar-sticky').height() / 2) - 60;
            var stickyOffset = $('.sidebar-sticky').offset().top - 30;
            var stickyOffsetEnd = $('.featured').offset().top - stickyHeight;
            var sidebarHeight = Math.round($('.sidebar').height() / 2);

            var stickyOffset50 = stickyOffset + sidebarHeight;

            $(window).scroll(function () {
                var sticky = $('.sidebar-sticky'),
                    scroll = $(window).scrollTop();
                if (scroll < stickyOffset) {
                    sticky.addClass('fixed-start');
                    sticky.removeClass('fixed-end');
                    sticky.removeClass('fixed');
                    sticky.removeClass('fixed-signup');
                } else if (scroll >= stickyOffset && scroll <= stickyOffsetEnd) {
                    sticky.addClass('fixed');
                    sticky.removeClass('fixed-end');
                    sticky.removeClass('fixed-start');
                    if (scroll >= stickyOffset50) {
                        sticky.addClass('fixed-signup');

                    } else {
                        sticky.removeClass('fixed-signup');
                    }

                } else {
                    sticky.removeClass('fixed');
                    sticky.addClass('fixed-end');
                    sticky.removeClass('fixed-start');


                }
            });
        }
        if ($('.social-fixed').length > 0) {
//sticky social
            var stickyHeightFixed = Math.round($('.social-fixed ul').height() / 2) - 330;

            var stickyOffsetFixed = $('.social-fixed ul').offset().top - 30;
            var stickyOffsetEndFixed = $('.featured').offset().top - stickyHeightFixed;


            $(window).scroll(function () {
                var stickyFixed = $('.social-fixed ul'),
                    scrollFixed = $(window).scrollTop();

                if (scrollFixed < stickyOffsetFixed) {
                    stickyFixed.addClass('fixed-start');
                    stickyFixed.removeClass('fixed-end');
                    stickyFixed.removeClass('fixed');

                } else if (scrollFixed >= stickyOffsetFixed && scrollFixed <= stickyOffsetEndFixed) {
                    stickyFixed.addClass('fixed');
                    stickyFixed.removeClass('fixed-end');
                    stickyFixed.removeClass('fixed-start');


                } else {
                    stickyFixed.removeClass('fixed');
                    stickyFixed.addClass('fixed-end');
                    stickyFixed.removeClass('fixed-start');


                }
            });

            $('.to-top').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0}, '300');
            });
        }
    }
}
