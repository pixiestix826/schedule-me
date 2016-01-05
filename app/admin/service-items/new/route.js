import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addService(formValues) {
      let service = this.store.createRecord('service-item', formValues);

      service.save().then(() => {
        this.transitionTo('admin.detail');
      });
    },
  },
});
