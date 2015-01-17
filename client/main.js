Meteor.subscribe('profiles')
Router.route('/', function(){
  this.render('home')
})