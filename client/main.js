Meteor.subscribe('profiles')
Router.route('/', function () {
  this.render('home')
})
Router.route('/documents/:userId', function () {
  Meteor.subscribe('documents')
  this.render('documents', {
    data: function () {
      return {docs: Documents.find().fetch()} 
    }
  })
})
Template.nav.helpers({
  nav: function () {
    var path = Router.current().route._path
    switch (path){
      case '/':
        var route = '/documents/'+Meteor.userId()
        var icon  = 'fa-folder-open'
        break;
      case '/documents/:userId':
        var route = '/'
        var icon  = 'fa-home'
        break;
    }
    return {route: route, icon: icon}
  }
})