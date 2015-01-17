Profiles = new Mongo.Collection('profiles')
Profiles.allow({
  update: function(userId, profile){
    return true
  }
})
Profiles.authUser = function(authData){
  var type = authData.type
  switch(type){
    case 'facebook':
      var email = authData.user.services.facebook.email
      var name = authData.user.services.facebook.name
      var handle = authData.user.services.facebook.first_name
      break;
    case 'google':
      var email = authData.user.services.google.email
      var name = authData.user.services.google.name
      var handle = authData.user.services.google.given_name
      break;
    case 'twitter':
      var email = authData.user.services.twitter.id+"@twitter.com"
      var name = authData.user.services.twitter.screenName
      var handle = authData.user.services.twitter.screenName
      break;
  }
  if(Profiles.getThisEmail(email) === undefined){
    Profiles.newProfile(handle, name, email, type)
  }else{
    Profiles.getThisEmail(email)
  }
}
Profiles.newProfile = function(handle, name, email, type){
  if(email === null) return
  var userData = {
    handle: handle,
    name: name,
    email: email,
    social: type,
    translator: false
  }
  Profiles.insert(userData, function(err, doc){
    if(err) return
    Profiles.getThisEmail(email)
  })
}
Profiles.getThisEmail = function(email){
  return Profiles.findOne({email: email})
}