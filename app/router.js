import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('register');

  this.route('admin', function() {
    this.route('login');
    this.route('detail');

    this.route('service-items', function() {
      this.route('new');

      this.route('edit', {path: '/:service-item_id'});
    });
  });

  this.route('login');
  this.route('logout');
  this.route('client', function() {
    this.route('detail');
  });

  this.route('register');

  this.route('appointment', function() {
    this.route('calender');
  });

  this.route('professionals', function() {
    this.route('services', {path: '/:professional_id'}, function() {
      this.route('booking', {path: '/:service-item-id'});
    });
  });
});

export default Router;
