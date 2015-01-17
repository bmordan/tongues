Meteor.startup(function () {

  Meteor.call('configAccounts')

  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/'
  })
  
})