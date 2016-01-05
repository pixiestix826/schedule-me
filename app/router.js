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
  });

  this.route('login');
  this.route('logout');
  this.route('client', function() {
  });
  this.route('client.detail');
});

export default Router;
