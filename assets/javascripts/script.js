$(function() {
	$('.sortable').sortable();
	$('.sortable').disableSelection();
});
$('.first_list').hover(function() {
  $(this).toggleClass("li_hover", 100);
  });