Meteor.startup(function(){

  Accounts.loginServiceConfiguration.remove({
    service: "facebook"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: "1553595334886567",
    secret: "ed88e95e8feaecdab5217ea605bbe3cf"
  })
  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: "H6hkZgRLkSdwt4OrgeuGttUrf",
    secret: "ku7b9QtFIBWfuPO92Ho0G4Ba8Xth7UiVD63yDcjadyeHFQopel"
  })
  Accounts.loginServiceConfiguration.remove({
    service: "google"
  })
  Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId: "769803526244-vtp8cjfhbn7u459oomdkghria2n5ic5d.apps.googleusercontent.com",
    secret: "-tJ0dVmLrCbavnlQc_K3LY0_"
  })

})

Accounts.validateLoginAttempt(function(authData){
  console.log('validateLoginAttempt() called:')
  console.log(authData)
  return false
})