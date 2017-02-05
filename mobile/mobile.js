$(function(){
$('#slideBar').toggle();

var i = -180;

  $('#down').on('click', function(){
    $('#slideBar').slideToggle();
    $('#down').css('-webkit-transform', 'rotate('+i+'deg)');
    i-=180;
  });

});
