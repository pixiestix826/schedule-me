import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),

  profile: Ember.computed.alias('currentUser.user.content'),

  actions: {
    save(formValues) {
      let user = this.get('profile');

      user.setProperties(formValues);
      user.save();
    },
  },
});
