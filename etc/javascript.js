$(function(){

  $('#clickSlide').hide();

  $('#hamburger').mouseenter(function(){
    $(this).fadeTo('slow',0.3);
    $('#clickSlide').slideDown();
    $('.screen').animate({'marginTop':'+=80px'});
  });
  $('#hamburger').mouseleave(function(){
    $(this).fadeTo('slow',1);
    if(('#clickSlide').is(':hover') === true){
    }
    else{
      $('#clickSlide').slideUp();
      $('.screen').animate({'marginTop':'20px'});
    }
  });
  $('#clickSlide').mouseleave(function(){
    $('#clickSlide').slideUp();
    $('.screen').animate({'marginTop':'20px'});
  });
  $('#home').mouseenter(function(){
    $(this).css({color: '#007849'});
  });
  $('#home').mouseleave(function(){
    $(this).css({color: '#0375B4'});
  });
  $('#apps').mouseenter(function(){
    $(this).css({color: '#007849'});
  });
  $('#apps').mouseleave(function(){
    $(this).css({color: '#0375B4'});
  });
  $('#about').mouseenter(function(){
    $(this).css({color: '#007849'});
  });
  $('#about').mouseleave(function(){
    $(this).css({color: '#0375B4'});
  });
  $('#contact').mouseenter(function(){
    $(this).css({color: '#007849'});
  });
  $('#contact').mouseleave(function(){
    $(this).css({color: '#0375B4'});
  });
  $(document).ready(function(){
    if($(window).width() < 600){
      window.location.replace("mobile/mobileHome.html");
    }
  });
  $(document).ready(function(){
    if($(window).height() < 400){
      window.location.replace("mobile/mobileHome.html");
    }
  });
  $(window).resize(function(){
    if($(window).width() < 600){
      window.location.replace("mobile/mobileHome.html");
    }
  });

});
