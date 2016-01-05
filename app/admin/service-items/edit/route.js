import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveService(formValues) {
      let service = this.modelFor('service-items.edit');
      service.setProperties(formValues);
      service.save().then(() => {
        this.transitionTo('admin.detail');
      });
    },
  },
});
