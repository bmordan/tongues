Meteor.publish('profiles', function () {
  return Profiles.find()
})
Meteor.publish('documents', function () {
  return Documents.find()
})