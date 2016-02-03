import DS from 'ember-data';

export default DS.Model.extend({
  startTime: DS.attr('moment-utc'),
  service: DS.belongsTo('service-item'),
  professional: DS.belongsTo('professional', {inverse: 'calendarAppointments'}),
  profile: DS.belongsTo('profile', {inverse: 'calendarAppointments'}),
  client: DS.belongsTo('profile', {inverse: 'clientAppointments'}),
  name: DS.attr('string'),
  length: DS.attr('number'),
  title: DS.attr('string'),
});
