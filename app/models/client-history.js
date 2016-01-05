import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date: DS.attr('date'),
  service: DS.attr('string'),
  price: DS.attr('number'),

  history: DS.hasMany('client-history'),

});
