import Ember from 'ember';

export default Ember.Route.extend({
  professionals: Ember.inject.service('professionals'),

  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
    });
  },
});
