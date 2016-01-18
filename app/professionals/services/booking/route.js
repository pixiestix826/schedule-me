
import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  professionals: Ember.inject.service('professionals'),

  _appointments: [],

  didReceiveAttrs() {
    let appointments = this.get('appointments');

    this.set('_appointments', appointments.toArray());
    this.renderCalendar();
  },

  renderCalendar() {
    let appointments = this.get('_appointments');

    let createAppointment = appointments.map(function(appointment) {
      let length = appointment.get('length') || appointment.get('service.time');

      return {
        id: appointment.get('id'),
        startsAt: appointment.get('startTime'),
        endsAt: moment(appointment.get('startTime')).add(length, 'minute'),
        title: appointment.get('title') || appointment.get('service.service'),
        model: appointment,
      };
    });

    console.log(createAppointment);

    this.set('createAppointment', createAppointment);
  },

  actions: {
    createAppointment(formValues) {
      let appointment = this.store.createRecord('appointment-item', formValues);

      appointment.save().then(() => {
        this.renderCalendar();
      });
    },

    createHistory(formValues) {
      let history = this.store.createRecord('history-list-item', formValues);

      history.save().then(() => {
        this.transitionTo('client.detail');
      });
    },
  },
});
