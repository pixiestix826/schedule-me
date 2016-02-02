import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    registerUser(formValues) {
      let {
        email, password, isProfessional,
      } = formValues;
      let userData = Ember.getProperties(formValues, ['firstName', 'lastName', 'phone', 'specialty']);
      if (isProfessional) {

        userData.roles = ['admin'];
      }

      this.get('session').authenticate('authenticator:register', email, password, userData).catch((reason) => {});
    },
  },
});
