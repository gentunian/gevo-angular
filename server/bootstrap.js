Meteor.startup(function () {
  if (Channels.find().count() === 0) {
    Events.remove({});

    _(9).times(function (n) {
      var channel = {
        name: Fake.sentence(3),
        description: Fake.sentence(10),
        public: Fake.fromArray([true, false]),
        picture: '/img/football' + parseInt(Math.random() * 4) + '.png',
      };
      Channels.insert(channel);

      _(20).times(function (n) {
        var ev = {
          channel: channel._id,
          name: Fake.sentence(3),
          description: Fake.sentence(10),
          active: Fake.fromArray([true, false]),
          datetime: moment().subtract(parseInt(Math.random() * 3), Fake.fromArray(['days','hours'])).toDate(),
          address: Fake.sentence(3),
          location: Fake.sentence(4),
          geolocation: '',
          tags: [],
          capacity: parseInt(Math.random() * 19 + 1),
          assistants: []
        };
        Events.insert(ev);
      });
    });
  }
});
