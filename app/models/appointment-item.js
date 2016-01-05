import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  name: DS.attr('string'),
  time: DS.attr('time'),

});
