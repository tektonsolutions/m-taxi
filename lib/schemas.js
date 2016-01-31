//https://atmospherejs.com/aldeed/collection2
//TODO: Driver schema

Drivers = new Mongo.Collection("drivers");
Taxis = new Mongo.Collection("taxis");
Settings = new Mongo.Collection("settings");
Types = new Mongo.Collection("types");

Schema = {};

Schema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    address: {
      type: String,
      optional: true
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    driverId: {
      type: String,
      optional: true
    },
    softDelete: {
      type: Boolean,
      optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        optional: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

Schema.Taxi = new SimpleSchema({
    plateNo: {
        type: String
    },
    taxiNo: {
      type: String,
      optional: true
    },
    type: {
      type: Schema.Type
    },
    currentOdo: {
      type: Number
    },
    brand: {
      type: String,
      optional: true
    },
    variant: {
      type: String,
      optional: true
    },
    year: {
      type: String,
      optional: true
    },
    createdBy: {
      type: String,
      autoValue: function() {
        if (this.isInsert) {
          return this.userId;
        } else {
          this.unset();  // Prevent user from supplying their own value
        }
      }
    }
});

//24 hour format
Schema.Setting = new SimpleSchema({
    penalty: {
        type: String
    },
    checkIn: {
      type: String,
      regEx: /([01]?[0-9]|2[0-3]):[0-5][0-9]/
    },
    checkOut: {
      type: String,
      regEx: /([01]?[0-9]|2[0-3]):[0-5][0-9]/
    },
    ratio: {
      type: Number
    }
});

Schema.Type = new SimpleSchema({
    type: {
        type: String
    },
    rental: {
      type: String
    }
});

Meteor.users.attachSchema(Schema.User);

Drivers.attachSchema(Schema.Driver);
Taxis.attachSchema(Schema.Taxi);
Settings.attachSchema(Schema.Setting);
Types.attachSchema(Schema.Type);
