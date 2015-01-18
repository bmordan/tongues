Meteor.subscribe('profiles')
Router.route('/', function () {
  this.render('home')
})
Router.route('/documents/:userId', function () {
  Meteor.subscribe('documents')
  this.render('documents', {
    data: function () {
      console.log({docs: Documents.find().fetch()})
      return {docs: Documents.find().fetch()} 
    }
  })
})