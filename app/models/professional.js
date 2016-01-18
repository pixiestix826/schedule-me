import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  specialty: DS.attr('string'),
  phone: DS.attr('string'),
  isProfessional: DS.attr('boolean', {defaultValue: false}),
  calendarAppointments: DS.hasMany('appointment-item', {inverse: null}),
});
