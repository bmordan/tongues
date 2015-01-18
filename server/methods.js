Meteor.methods({
  _dump: function () {
    var profiles = Profiles.find().fetch()
    var documents = Documents.find().fetch()
    console.log('Profiles:', profiles)
    console.log('Documents:', documents)
  },
  _empty: function () {
    Profiles.remove({})
    Documents.remove({})
  },
  configAccounts: function () {
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
  }
})