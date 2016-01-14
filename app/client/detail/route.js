import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    return this.get('currentUser.user');
  },

  model() {
    return Ember.RSVP.hash({
      history: this.get('currentUser.user.clientAppointments'),
    });
  },
});
