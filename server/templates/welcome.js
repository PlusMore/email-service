EmailService.Templates.welcome = {
  path: 'emails/welcome/template.html',    // Relative to the 'private' dir.
  scss: 'emails/welcome/style.scss',       // Mail specific SCSS.

  helpers: {
    guestName: function() {
      return this.guest.profile.firstName + ' ' + this.guest.profile.lastName
    },
  },

  route: {
    path: '/welcome/:name',
    data: function() {
      var hotel = {
        name: 'City Club',
        geo: {
          city: 'New York City'
        }
      }

      var user = {
        profile: {
          firstName: "Manny",
          lastName: "Sani"
        }
      }

      return {
        title: hotel.name + ' | Your Stay',
        viewInBrowserUrl: "http://plusmore.io",
        imageUrl: "https://www.filepicker.io/api/file/ftJg8FHTxe3agtDzNlPA/convert?w=500&fit=scale&cache=true",
        hotel: hotel,
        guest: user,
        preheaderTitle: hotel.name + ' | PlusMore',
        preheaderText: 'Control your stay with PlusMore',
        viewInBrowserUrl: 'http://localhost:3000/emails/preview/welcome/Manny'
      };
    }
  }
};
