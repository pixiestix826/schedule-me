import Ember from 'ember';

export default Ember.Route.extend({
  professionals: Ember.inject.service('professionals'),

  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
    });
  },

  actions: {
    createAppointment(formValues) {
      this.transitionTo('professionals.services.booking', formValues.service.id);
    },
  },
});
