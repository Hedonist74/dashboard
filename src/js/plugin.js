;(function ($){

    // dropdown `cash`
    var dropdownWrapper = $('.dropdown-wrapper');

    dropdownWrapper.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.dropdown-menu');
        target.slideToggle();
        $(this).toggleClass('open');
    });

    // dropdown `notification`
    var notificationWrapper = $('.notification-wrapper');

    notificationWrapper.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.notification-menu');
        target.slideToggle();
        $(this).toggleClass('open');
        // $('.personal').toggleClass('hide');
    });

    // toggle sidebar menu
    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileClass = '_mobileSidebar';
    var openInMobile = '_openInMobile';
    var mobileBreakPoint = 1280;

    menuBtn.on('click', function(e){

        var width = $(window).width(); // получаем ширину окна
        body.toggleClass(mobileClass); // вешаем класс для открытия меню

        if ( width < mobileBreakPoint ){
            body.toggleClass(openInMobile)
        }

    });

    $(window).on('resize load', function(e){

        var width = $(this).width();
        if( width < mobileBreakPoint && !body.hasClass(openInMobile) ){
            body.addClass(mobileClass);
        } else if( width >= mobileBreakPoint ) {
            body.removeClass(mobileClass);
            body.removeClass(openInMobile);
        }
        // console.log(width);
    });

    // PRE LOADER HIDE
    var loader = $('#loading');

    $(window).on('load', function(e){
        loader.addClass('hide');
    });

})(jQuery);