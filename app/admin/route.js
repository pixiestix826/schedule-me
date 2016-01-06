import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
   return new RSVP.Promise((resolve, reject) => {
     return this.get('sessionUser.user').then((user) => {
       if (Ember.get(user, 'isAdmin')) {
         return resolve();
       }

       // Make the user go to the login screen
       this.transitionTo('login');
       return reject();
     });
   });
 },
});
