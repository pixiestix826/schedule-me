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
      let appointment = this.store.createRecord('appointment-item', formValues);

      appointment.save().then(() => {
        this.transitionTo('professionals.services.booking');
      });
    },
  },
});
