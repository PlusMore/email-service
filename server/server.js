Mailer.config({
  from: 'John Doe <from@domain.com',
  replyTo: 'John Doe <from@domain.com'
});

Meteor.startup(function() {

  Mailer.init({
    templates: Templates,     // Global Templates namespace, see lib/templates.js.
    helpers: TemplateHelpers, // Global template helper namespace.
    layout: {
      name: 'emailLayout',
      path: 'emails/layouts/salted/layout.html',   // Relative to 'private' dir.
      scss: 'emails/layouts/salted/layout.scss'
    }
  });

});
