$(function(){

  $('#clickSlide').toggle();

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
    $(this).css({color: '#FFA824'});
  });
  $('#home').mouseleave(function(){
    $(this).css({color: '#984B43'});
  });
  $('#apps').mouseenter(function(){
    $(this).css({color: '#FFA824'});
  });
  $('#apps').mouseleave(function(){
    $(this).css({color: '#984B43'});
  });
  $('#about').mouseenter(function(){
    $(this).css({color: '#FFA824'});
  });
  $('#about').mouseleave(function(){
    $(this).css({color: '#984B43'});
  });
  $('#contact').mouseenter(function(){
    $(this).css({color: '#FFA824'});
  });
  $('#contact').mouseleave(function(){
    $(this).css({color: '#984B43'});
  });
});
