import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),

  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
    });
  },
});
