import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let professional = this.modelFor('professionals.services');

    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
      professional,
    });
  },

  actions: {
    createAppointment(formValues) {
      this.transitionTo('professionals.services.booking', formValues.service.id);
    },
  },
});
