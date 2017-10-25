;(function ($){

    // dropdown
    var dropdownWrapper = $('.dropdown-wrapper');

    dropdownWrapper.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.dropdown-menu');
        target.slideToggle();
        $(this).toggleClass('open');
    });

})(jQuery);