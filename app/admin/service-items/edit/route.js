import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveService(formValues) {
      let service = this.modelFor(this.routeName);

      service.setProperties(formValues);
      service.save().then(() => {
        this.transitionTo('admin.detail');
      });
    },

    removeService(formValues) {
      let service = this.modelFor(this.routeName);

      service.destroyRecord(formValues);
      this.transitionTo('admin.detail');
    },
  },
});
