$(document).ready(function(){

  $("#flip").click(function() {
      $("#panel").slideToggle("slow");
});

  $('h4').hover(function(){
    $(this).css('background', 'blue');
  })

  $('.project-image').click(function(){
    $(this).css('width', '300px');
  })

  $('#social-links a img').hover(function(){
    $(this).css('background-color', 'blue');
    $(this).css('border-radius', '10px');
  })

  $('#social-links a img').mouseout(function() {
    $(this).css('background-color', '#FFF68F');
  });

  /*$('#low-vision').click(function(){
    $('h1').css('color', '#306009');
    $('h4').css('border', '3px dotted #92CF17');
    $('h4').css('color', '92CF17');
    $('p').css('color', 'white');
    $('li').css('color', 'lightblue');
    $('body').css('background', 'url("images/dark_embroidery.png")' );
  });*/

  $('#low-vision').click(function(){
    $('body').toggleClass('changeTextColors');
    $('body').css('background', 'url("images/dark_embroidery.png")');
    $('h4').hover(function(){
      $(this).css('background', 'white');
    })

  });
  //Figuring out how to select h1 of changeTextColors


});
