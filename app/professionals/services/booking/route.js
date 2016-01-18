
import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    let service = this.store.findRecord('service-item', params['service-item-id']);
    let professional = this.modelFor('professionals.services');

    return Ember.RSVP.hash({ service, professional });
  },

  actions: {
    createAppointment(formValues) {
      let appointment = this.store.createRecord('appointment-item', formValues);

      // get the professional
      let professional = this.modelFor(this.routeName).professional;

      // get the service
      let service = this.modelFor(this.routeName).service;

      appointment.setProperties({ professional, service });

      appointment.save().then(() => {
        this.transitionTo('client.detail');
      });
    },
  },
});
