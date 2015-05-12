EmailService.Schemas.Address = new SimpleSchema({
  streetNumber: {
    type: String // 1b for example
  },
  streetName: {
    type: String
  },
  city: {
    type: String
  },
  stateCode: {
    type: String
  },
  zipcode: {
    type: String
  }
});

EmailService.Schemas.Venue = new SimpleSchema({
  name: {
    type: String
  },
  address: {
    type: EmailService.Schemas.Address
  }
});

EmailService.Schemas.ReservationParty = new SimpleSchema({
  name: {
    type: String
  },
  size: {
    type: Number
  }
});
