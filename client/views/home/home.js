Template.home.rendered = function(){
  animateLogo()
  animateLogins()
}
function animateLogo(){ 
  $('section#logo').hide()
  setTimeout(function(){
    $('section#logo').addClass('animated bounceInDown')
    $('section#logo').show()
  },750)
}
