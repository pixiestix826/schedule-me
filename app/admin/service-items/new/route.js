import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addService(formValues) {
      let service = this.store.createRecord('service-item', formValues);

      service.save().then(() => {
        this.get('service-item').pushObject('services-list');
        this.transitionTo('admin.detail');
      });
    },
  },
});
