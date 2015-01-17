Template.home.rendered = function(){
  animateLogo()
}
function animateLogo(){ 
  $('section#square').hide()
  setTimeout(function(){
    $('section#square').addClass('animated bounceInDown')
    $('section#square').show()
  },750)
}
Template.upload.helpers({
  
})