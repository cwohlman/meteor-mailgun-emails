Package.describe({
  name: 'useful:email-mailgun',
  summary: 'Send and receive emails via mailgun',
  version: "0.0.1",
  git: 'git@github.com:usefulio/emails-mailgun.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use('cwohlman:emails@0.3.0');
  api.imply('cwohlman:emails');

  api.use('http');
  api.use('sha');
  api.use('iron:router');

  api.addFiles('mailgun-emails.js');

  api.export('Mailgun');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:mailgun-emails');
  api.use('iron:router');
  api.addFiles('mailgun-emails-tests.js');
});
