import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  didReceiveAttrs() {
    let appointments = this.get('appointments');

    let occurrences = appointments.map(function(appointment) {
      let length = appointment.get('length') || appointment.get('service.time');

      return {
        id: appointment.get('id'),
        startsAt: appointment.get('startTime'),
        endsAt: moment(appointment.get('startTime')).add(length, 'minute'),
        title: appointment.get('service.service'),
      };
    });

    console.log(occurrences);

    this.set('occurrences', occurrences);
  },

  actions: {
    calendarAddOccurrence: function({startsAt, endsAt}) {
      let startTime = moment(startsAt);

      this.get('store').createRecord('appointment-item', {

      });

      // this.get('occurrences').pushObject(Ember.Object.create({
      //   title: occurrence.get('title'),
      //   startsAt: occurrence.get('startsAt'),
      //   endsAt: occurrence.get('endsAt')
      // }));
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      // occurrence.setProperties(properties);
    },

    calendarRemoveOccurrence: function(occurrence) {
      // this.get('occurrences').removeObject(occurrence);
    }
  }
});
