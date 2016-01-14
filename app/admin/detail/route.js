import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    return this.get('currentUser.user');
  },

  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
      appointments: this.get('currentUser.user.clientAppointments'),
    });
  },
});
