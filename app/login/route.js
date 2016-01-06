import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    loginUser(formValues) {
      this.get('session').authenticate('authenticator:login', formValues.username, formValues.password)
        .catch((reason) => {
          console.log(reason);
        });
    },
  },
});
