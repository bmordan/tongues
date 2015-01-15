Meteor.startup(function(){

  Accounts.loginServiceConfiguration.remove({
    service: "facebook"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: accounts.facebookAppId,
    secret: accounts.facebookSecret
  })
  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: accounts.twitterConsumerKey,
    secret: accounts.twitterSecret
  })
  Accounts.loginServiceConfiguration.remove({
    service: "google"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId: accounts.googleClientId,
    secret: accounts.googleSecret
  })

})
Accounts.validateLoginAttempt(function(authData){
  Profiles.authUser(authData)
  return true
})