Template.home.rendered = function(){
  animateLogo()
}
Template.upload.rendered = function () {
  loadFilePicker(accounts.filepicker)
}
Template.upload.events({
  'click #upload': function (e) {
    console.log(Meteor.userId())
    
    filepicker.pick({
      mimetypes: ['text/plain','text/html'],
      multiple: true
    },
    function (InkBlob) {
      Documents.insert({
        userId: Meteor.userId(),
        doc: InkBlob,
        created: new Date()
      });
      Router.go('/documents/'+Meteor.userId())
    },
    function(FPError){
      if(FPError && FPError.code !== 101)
        alert(FPError.toString())
    })
  }
})
function animateLogo(){ 
  $('section#square').hide()
  setTimeout(function(){
    $('section#square').addClass('animated bounceInDown')
    $('section#square').show()
  },750)
}