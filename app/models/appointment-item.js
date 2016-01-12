import DS from 'ember-data';

export default DS.Model.extend({
  startTime: DS.attr('moment-utc'),
  service: DS.belongsTo('service-item'),
  name: DS.attr('string'),
  length: DS.attr('number'),
  title: DS.attr('string'),
});
