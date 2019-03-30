$(function(){
  'use strict' ;
  $(window).scroll(function () {
    window.console.log($('.navbar').height()) ;
    window.console.log($(window ).scrollTop());
    var navbar = $('.navbar') ;
    if ($(window).scrollTop()>= navbar.height()){
      navbar.addClass('scrolled') ;
    }else {
      navbar.removeClass('scrolled') ;
    }

  });
  // tabs handling
  $('.tab-switch li').click(function(){
    // Add selected class to the active link
    $(this).addClass('selected').siblings().removeClass('selected') ;
    // hide all dives
    $('.tabs-section .tabs-content > div').hide() ;
    // show the div which is connected (active )
    $('.' + $(this).data('class')).show();
    window.console.log($(this).data('class'));
    // hide all pic
  $('.col-md-3 .img-responsive ').hide() ;
    // show the pic which is connected (active )
    $('.' + $(this).data('class')).show();
    window.console.log($(this).data('class'));
  });

});
// A simple function to print a message to the user after submittin their form
function result(){
  document.write("<h1> Thanks for subscribing in our weekly tech news") ;
  document.write('<a class="dropdown-item" href="index.html" " > <h3 class="h3"> Go back home </h3> </a>')
}
