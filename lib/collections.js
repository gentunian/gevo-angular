Channels = new Mongo.Collection('channels');
Events = new Mongo.Collection('events');

Channels.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Channel name'
    },
    max: 128
  },
  description: {
    type: String,
    label: 'Description',
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Channel description'
    },
    max: 256
  },
  subscribers: {
    type: [String],
    optional: true
  },
  public: {
    type: Boolean,
    label: 'Public',
    defaultValue: false,
    autoform: {
      type: 'toggle'
    }
  },
  picture: {
    type: String,
    label: 'Channel Picture',
    optional: true
  },
}));

Events.attachSchema(new SimpleSchema({
  channel: {
    type: String,
    optional: true,
  },
  name: {
    type: String,
    label: 'Name',
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Event name'
    },
    max: 128
  },
  description: {
    type: String,
    label: 'Description',
    optional: true,
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Event description'
    },
    max: 256
  },
  datetime: {
    type: Date,
    label: 'Date',
    autoform: {
      type: 'datetime-local'
    }
  },
  address: {
    type: String,
    label: 'Address',
    optional: true,
    autoform: {
      'label-type': 'stacked',
      placeholder: ''
    },
  },
  location: {
    type: String,
    label: 'Location Name',
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Brief info about location'
    },
    max: 128
  },
  geolocation: {
    type: [String],
    optional: true,
  },
  tags: {
    type: [String],
    optional: true,
    label: 'Tags'
  },
  capacity: {
    type: Number,
    label: 'Event Capacity'
  },
  active: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  assistants: {
    type: [String],
    optional: true,
  }
}));
