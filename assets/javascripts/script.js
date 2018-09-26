$(function() {
	$('.sortable').sortable();
	$('.sortable').disableSelection();
});
$('li').hover(function() {
  $(this).toggleClass("li_hover");
  });