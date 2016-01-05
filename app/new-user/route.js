import Ember from 'ember';

export default Ember.Route.extend({
  statsTracker: Ember.inject.service('session'),

  actions: {
    addClient(formValues) {
      let client = this.store.createRecord('client-info', formValues);

      client.save().then(() => {
        // Send info that we have created a new client createRecord
        this.get('session').newClientWasAdded();

        this.transitionTo('client.detail');
      });
    },
  },
});
