import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  _appointments: [],

  didReceiveAttrs() {
    this.renderCalendar();
  },

  renderCalendar() {
    let appointmentsRelations = this.get('appointments');
    this.set('_appointments', appointmentsRelations.toArray());

    let appointments = this.get('_appointments');

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

    this.set('occurrences', occurrences);
  },

  actions: {
    calendarAddOccurrence: function({startsAt, endsAt}) {
      let startTime = moment(startsAt);
      let title = window.prompt(`What's the title of your break?`, `Break Time`);
      let profile = this.get('profile');

      if (!title) { return };

      let length = window.prompt(`How much time would you like to reserve`, 60);

      if (!length) { return };

      let adminBreak = this.get('store').createRecord('appointment-item', {
        title,
        startTime,
        length,
        profile,
      });

      adminBreak.save().then(() => {
        this.renderCalendar();
      });
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      if (occurrence && occurrence.model) {
        let confirm = window.prompt(`Are you sure you want to change this appointment?`, `Yes`);
        occurrence.model.setProperties();

        occurrence.model.save().then(() => {
          this.renderCalendar();
        });
      }
    },

    calendarRemoveOccurrence: function(occurrence) {
      if (occurrence && occurrence.model) {
        if (window.confirm(`Are you sure you want to delete this appointment`)) {
          this.get('_appointments').removeObject(occurrence.model);

          occurrence.model.destroyRecord().then(() => {
            this.renderCalendar();
          });
        }
      }
    },
  },
});
