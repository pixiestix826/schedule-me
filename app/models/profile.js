import DS from 'ember-data';
import IAm from 'ember-i-am/mixins/i-am';

export default DS.Model.extend(IAm, {
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),
  specialty: DS.attr('string'),
  phone: DS.attr('string'),
  roles: DS.attr(),
  clientAppointments: DS.hasMany('appointment-item'),
});
