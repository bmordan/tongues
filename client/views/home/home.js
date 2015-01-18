Template.home.rendered = function(){
  animateLogo()
}
Template.upload.rendered = function () {
  loadFilePicker(accounts.filepicker)
}
Template.upload.events({
  'click #upload': function (e) {    
    filepicker.pick({
      mimetypes: ['text/plain','text/html'],
      multiple: true
    },
    function (InkBlob) {
      Documents.insert({
        userId: Meteor.userId(),
        doc: InkBlob,
        created: moment().format('MMMM Do YYYY h:mm:ss a')
      });
      Router.go('/documents/'+Meteor.userId())
    },
    function(FPError){
      if(FPError && FPError.code !== 101)
        alert(FPError.toString())
    })
  }
})
Template.documentLink.events({
  'click .button': function (e) {
    Router.go('/documents/'+Meteor.userId())
  }
})
function animateLogo(){ 
  $('section.square').hide()
  setTimeout(function(){
    $('section.square').addClass('animated bounceInDown')
    $('section.square').show()
  },750)
}