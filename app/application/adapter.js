import DS from 'ember-data';
import config from 'schedule-me/config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiHost,

  namespace: 'api',
});
