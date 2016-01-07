import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  service: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  time: DS.attr('number'),
});
