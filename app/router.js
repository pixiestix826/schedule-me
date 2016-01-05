import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('new-user');

  this.route('admin', function() {
    this.route('login');
    this.route('detail');

    this.route('service-items', function() {
      this.route('new');

      this.route('edit', {
        path: 'service-item_id'
      });
    });
  });

  this.route('login');
  this.route('logout');
  this.route('client', function() {
    this.route('detail');
  });
});

export default Router;
