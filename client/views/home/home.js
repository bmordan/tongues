Template.home.rendered = function(){
  animateLogo()
}
Template.upload.rendered = function () {
  loadFilePicker(accounts.filepicker)
}
Template.upload.events({
  'click #upload': function (e) {
    // filepicker.pick({
    //   mimetypes: ['text/plain','text/html'],
    //   multiple: true
    // },
    // function (InkBlob) {
    //   console.log(InkBlob)
    // })
  }
})
function animateLogo(){ 
  $('section#square').hide()
  setTimeout(function(){
    $('section#square').addClass('animated bounceInDown')
    $('section#square').show()
  },750)
}