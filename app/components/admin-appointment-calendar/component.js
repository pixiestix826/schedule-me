import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  didReceiveAttrs() {
    let appointments = this.get('appointments');

    let occurrences = appointments.map(function(appointment) {
      return {
        id: appointment.get('id'),
        startsAt: appointment.get('startTime'),
        endsAt: moment(appointment.get('startTime')).add(60, 'minute'),
        title: 'Foo',
      };
    });

    console.log(occurrences);

    this.set('occurrences', occurrences);
  },

  actions: {
    calendarAddOccurrence: function(occurrence) {
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
