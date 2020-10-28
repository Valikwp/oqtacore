
//import cookie from 'jquery.cookie';
import svg4everybody from 'svg4everybody';
import select2 from 'select2';
import 'select2/dist/css/select2.css';


export default function () {
    svg4everybody({});

    $('.hamburger-icon').on('click', function() {
        $(this).addClass('hamburger-icon-active');
        $('.header-block-menu').addClass('header-block-menu-active');
        $('body').addClass('body-menu-active');
    });
    $('.hamburger-icon-close').on('click', function() {
        $(this).removeClass('hamburger-icon-active');
        $('.header-block-menu').removeClass('header-block-menu-active');
        $('body').removeClass('body-menu-active');
    });
    var select2 = $('.select2');
    select2.select2({
        minimumResultsForSearch: -1
    });
    select2.on('select2:selecting', function(e){

         window.location = e.params.args.data.id;
    });
}
