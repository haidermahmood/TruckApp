
$(function() {

// grab the initial top offset of the navigation 
var sticky_navigation_offset_top = $('.sticky').offset().top - 50;

// our function that decides weather the navigation bar should have "fixed" css position or not.
var sticky_navigation = function() {
var scroll_top = $(window).scrollTop(); // our current vertical position from the top

// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
if (scroll_top > sticky_navigation_offset_top) {
//                    $('.sticky').css({ 'position': 'fixed', 'top':0 });
$('.sticky').addClass('sticky-nav');
$('.main-content').css({
paddingTop: 150
});

} else {
$('.main-content').css({
paddingTop: 60
});
//                    $('.sticky').css({ 'position': 'static', 'top':196 });
$('.sticky').removeClass('sticky-nav')
}
};

// run our function on load
sticky_navigation();

// and run it again every time you scroll
$(window).scroll(function() {
sticky_navigation();
});

});
