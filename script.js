jQuery.noConflict();
jQuery('#URL').bind('keyup change', function (){
  jQuery('#encodedURL').val(encodeURIComponent(jQuery('#URL').val()));
});