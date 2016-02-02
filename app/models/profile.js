import DS from 'ember-data';
import IAm from 'ember-i-am/mixins/i-am';

export default DS.Model.extend(IAm, {
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  specialty: DS.attr(),
  phone: DS.attr(),
  roles: DS.attr(),
  clientAppointments: DS.hasMany('appointment-item', { inverse: null }),
  calendarAppointments: DS.hasMany('appointment-item', { inverse: null }),
});
