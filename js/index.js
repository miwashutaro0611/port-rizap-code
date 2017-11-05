var width=window.innerWidth;
$(function(){
	$('a[href^="#"').click(function(){
    var a=1500,b=$(this).attr("href"),c=$("#"==b||""==b?"html":b),d=c.offset().top;
    return $("body,html").animate({scrollTop:d},a,"easeInQuint"),!1
  });

  $("#nav_btn").click(function(){
    $("nav").fadeToggle();
    $(this).toggleClass("active");
  });

	$("nav ul li a").click(function() {
      if($(window).width()<900){
        $("nav").fadeToggle();
        $("#nav_btn").toggleClass("active");
      }
    });

  $(window).resize(function() {
    if($(window).width()>=900){
      $('nav').show();
      $("header .logo").css({position:"relative",left:"2%"});
    }
    else if($(window).width()<900){
      $('nav').hide();
      $("header .logo").css({position:"relative",left:"0%"});
    }
    $("#nav_btn").toggleClass("active",false);
  });
});
