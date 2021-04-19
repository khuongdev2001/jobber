(function($) {
    "use strict";
    var $main_window = $(window);
    $main_window.on("load", function() { $("#preloader").fadeOut("slow"); });
    $main_window.on("scroll", function() { if ($(this).scrollTop() > 250) { $(".back-to-top").fadeIn(200); } else { $(".back-to-top").fadeOut(200); } });
    $(".back-to-top").on("click", function() { $("html, body").animate({ scrollTop: 0 }, "slow"); return false; });
    var logo_path = $('.mobile-menu').data('logo');
    $('#main-navbar').slicknav({ appendTo: '.mobile-menu', removeClasses: false, label: '', closedSymbol: '<i class="lni-chevron-right"><i/>', openedSymbol: '<i class="lni-chevron-down"><i/>', brand: '<a href="index.html"><img src="' + logo_path + '" class="img-responsive" alt="logo"></a>' });
    $main_window.on('scroll', function() { var scroll = $(window).scrollTop(); if (scroll >= 100) { $(".scrolling-navbar").addClass("top-nav-collapse"); } else { $(".scrolling-navbar").removeClass("top-nav-collapse"); } });
    if ($(".fact-count").length > 0) { $(".counter").counterUp({ delay: 10, time: 500 }); }
    var testiOwl = $("#testimonials");
    testiOwl.owlCarousel({ autoplay: true, margin: 30, dots: true, autoplayHoverPause: true, nav: false, loop: true, responsiveClass: true, responsive: { 0: { items: 1, }, 991: { items: 1 } } });
    var newproducts = $("#new-products");
    newproducts.owlCarousel({ autoplay: true, nav: true, autoplayHoverPause: true, smartSpeed: 350, dots: false, margin: 30, loop: true, navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'], responsiveClass: true, responsive: { 0: { items: 1, }, 575: { items: 2, }, 991: { items: 3, } } });


})(jQuery);


// $(function() {
//     $("img.lazy").lazyload({});
//     $('img.lazy').on('appear', function() {
//         console.log(this)
//     });
// });

// btn open model search 

$(".btn-open-search-post").click(function() {
    $(".top-search-post").toggleClass("active");
    return false;
})

function addLoading() {
    $("body").append('<div class="box-loading"><div class="dialog"></div><div class="spinner-border text-primary" role="status"><span class="visually-hidden"></span></div></div>')
}

function removeLoading() {
    $("body .box-loading").remove();
}


function strLimit(str, end, padding = "....") {
    if (str.length < end)
        return str;
    return str.slice(0, end) + padding;
}

function currencyFormat(number) {
    return Intl.NumberFormat("de-DE").format(number) + " VNĐ";
}