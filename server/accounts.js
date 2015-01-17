Accounts.validateLoginAttempt (function (authData) {
  Profiles.authUser(authData)
  return true
})