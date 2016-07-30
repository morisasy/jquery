$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.photos').show();
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});
