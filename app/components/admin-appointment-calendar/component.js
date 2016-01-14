import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  didReceiveAttrs() {
    let appointments = this.get('appointments');
    console.log('apts');

    let occurrences = appointments.map(function(appointment) {
      let length = appointment.get('length') || appointment.get('service.time');

      return {
        id: appointment.get('id'),
        startsAt: appointment.get('startTime'),
        endsAt: moment(appointment.get('startTime')).add(length, 'minute'),
        title: appointment.get('title') || appointment.get('service.service'),
        model: appointment,
      };
    });

    console.log(occurrences);

    this.set('occurrences', occurrences);
  },

  actions: {
    calendarAddOccurrence: function({startsAt, endsAt}) {
      let startTime = moment(startsAt);
      let title = window.prompt(`What's the title of your break?`, `Break Time`);
      let length = window.prompt(`How much time would you like to reserve`, 60);
      let adminBreak = this.get('store').createRecord('appointment-item', {
        title,
        startTime,
        length,
      });

      adminBreak.save().then(() => {
        this.didReceiveAttrs();
      });
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      if (occurrence && occurrence.model) {
        let confirm = window.prompt(`Are you sure you want to change this appointment?`, `Yes`);
        occurrence.model.setProperties();

        occurrence.model.save().then(() => {
          this.didReceiveAttrs();
        });
      }
    },

    calendarRemoveOccurrence: function(occurrence) {
      if (occurrence && occurrence.model) {
        let confim = window.prompt(`Are you sure you want to delete this appointment`, `Yes`);
        occurrence.model.destroyRecord().then(() => {
          this.didReceiveAttrs();
        });
      }
    },
  },
});
