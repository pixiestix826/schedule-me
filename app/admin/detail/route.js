import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
      appointments: this.store.findAll('appointment-item'),
    });
  },
});
