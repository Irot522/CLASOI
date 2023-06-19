// header scroll
$(document).ready(function(){ 

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })

 });

//  click image changes
$(".img2").fadeOut(0);
$(".img3").fadeOut(0);
$(".img4").fadeOut(0);
$(".img6").fadeOut(0);
$(".img7").fadeOut(0);
$(".img8").fadeOut(0);
$("#button1").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img1").fadeIn().siblings().fadeOut();
});
$("#button2").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img2").fadeIn().siblings().fadeOut();
});
$("#button3").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img3").fadeIn().siblings().fadeOut();
});
$("#button4").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img4").fadeIn().siblings().fadeOut();
});	
$("#button5").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img5").fadeIn().siblings().fadeOut();
});	
$("#button6").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img6").fadeIn().siblings().fadeOut();
});	
$("#button7").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img7").fadeIn().siblings().fadeOut();
});	
$("#button8").click(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(".img8").fadeIn().siblings().fadeOut();
});	
