$(function(){
$('#slideBar').toggle();
$('#home2').toggle();

var isLeft = false;
var i = -180;
//Disables jquery mobile printing without widget
  $.mobile.loading().hide();

//Flips the arrow when the user presses it
  $('#down').on('click', function(){
    $('#slideBar').slideToggle();
    $('#down').css('-webkit-transform', 'rotate('+i+'deg)');
    i-=180;
    $('.outerBody').toggle('slow');
    $('p').toggle('fast');
  });
//new text appears when the user swipes left if isLeft=false
  $('.outerBody').on('swipeleft', function(){
    if(isLeft == false){
      //$('#home1').hide('slide', {direction: 'left'}, 1000);
      //$('#home2').show('slide', {direction: 'left'}, 1500);
      isLeft = true;
    }
  });
//new text appears when the user swipes right if isLeft=true
  $('.outerBody').on('swiperight', function(){
    if(isLeft == true){
      $('#home1').fadeIn('slow');
      $('#home2').fadeOut('fast');
      isLeft = false;
    }
  });

});
