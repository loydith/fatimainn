// slider function
$(document).ready(function(){
  $('.slider').slider({ 
    full_width: true,
    height : 600, // default - height : 400
});
// sidenav function
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown({ hover: false });
  });
// modal
$(document).ready(function(){
  $('.modal').modal();
  $('.carousel').carousel();
});