Documents = new Mongo.Collection('documents')
Documents.allow({
  insert: function (userId, doc) {
    if(userId === Meteor.userId())
    return true
  }
})