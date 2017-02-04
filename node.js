$(function(){

  $('#clickSlide').toggle();

  $('#hamburger').mouseenter(function(){
    $(this).fadeTo('slow',0.3);
    $('#clickSlide').slideToggle();
  });
  $('#hamburger').mouseleave(function(){
    $(this).fadeTo('slow',1);
    if(('#clickSlide').is(':hover') === true){
    }
    else{
      $('#clickSlide').slideToggle();
    }
  });
  $('#clickSlide').mouseleave(function(){
    $('#clickSlide').slideToggle();
  });
});
