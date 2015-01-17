Profiles = new Mongo.Collection('profiles')
Profiles.allow({
  update: function (userId, profile) {
    return true
  }
})
Profiles.authUser = function (authData) {
  var userProfile = Profiles.getUser(authData.user._id)
  if(userProfile === undefined)
    Profiles.newProfile(authData)
}
Profiles.newProfile = function (authData) {
  Profiles.insert(authData)
}
Profiles.getUser = function (meteorUserId) {
  return Profiles.findOne({}, {'user._id' : meteorUserId})
}