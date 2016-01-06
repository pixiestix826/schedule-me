import DS from 'ember-data';
import IAm from 'ember-i-am/mixins/i-am';

export default DS.Model.extend(IAm, {
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  roles: DS.attr(),

});
