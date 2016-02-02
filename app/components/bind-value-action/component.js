import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    bindingAction(component) {
      this.set('value', component.get('value'));
    },
  },
});
