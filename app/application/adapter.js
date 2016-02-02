import DS from 'ember-data';
import config from 'schedule-me/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host: config.apiHost,

  namespace: 'api',
});
