$(document).ready(function(){

//1
$('#submitBtn').click(function(){
  var userInput = $('input:text').val();
  $('h3').append('<h3>' + userInput + '</h3>');
  $('input:text').val('');
})

//2
$('.chex').change(function(){
  $('.hidden').removeClass('hidden');
})

//3
$('tbody').append('<tr> <td> Nermal </td> <td>6</td> <td>Content</td> </tr>');
$('tbody').append('<tr> <td> Garfeild</td> <td>22</td> <td>Ravished</td> </tr>');

//4
$("td:contains('Hangry')").css('color', 'red');
$("td:contains('Content')").css('color', 'green');

//5


$('.btn.btn-warning').click(function(){
 $("tr:contains('9')").hide('tr');
 $("tr:contains('8')").hide('tr');
 $("tr:contains('6')").hide('tr');
 $("tr:contains('7')").hide('tr');
 $("tr:contains('18')").show('tr');
})

//6  Child 0 of each table row

$('.btn.btn-success').click(function() {
  $('table > tbody > tr td:nth-child(1)').css('text-transform', 'uppercase');
})

//7
$('.btn.btn-primary').click(function() {
  $('table').hide(this);
})

//8
$('h4').contents(function() {
  $(this).sort();
});

//9
$('#disableUs').content(){
  $('')
};

});
