import Ember from 'ember';

export default Ember.Route.extend({
  professionals: Ember.inject.service('professionals'),

  model() {
    return Ember.RSVP.hash({
      services: this.store.findAll('service-item'),
    });
  },

  actions: {
    bookService(service) {
      this.store.createRecord('service-item', formValues);

      service.save().then(() => {
        this.transitionTo('services.booking');
      });
    },
  },
});
