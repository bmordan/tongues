Meteor.methods({
  profiles: function(){
    var profiles = Profiles.find().fetch()
    console.log(profiles)
  },
  clear: function(){
    Profiles.remove({})
  }
})