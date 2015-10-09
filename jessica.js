$(document).ready(function(){

  $("#flip").click(function() {
      $("#panel").slideToggle("slow");
});

  $('h4').hover(function(){
    $(this).css('background', '#631D76');
    $(this).css('color', '#F3F3F3')
    $(this).css('border',' 3px groove #F3F3F3' )
  })

  $('.project-image').click(function(){
    $(this).css('width', '300px');
  })

  $('#social-links a img').hover(function(){
    $(this).css('background-color', '#631D76');
    $(this).css('border-radius', '20px');
  })

  $('#social-links a img').mouseout(function() {
    $(this).css('background-color', '#F3F3F3');
  });

  $( ".reference-contact" ).hide();

  $(".reference-contact").click(function() {
    $(this).show('.reference-contact');
  })

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
