/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    apiHost: 'https://schedule-me-api.herokuapp.com',
    modulePrefix: 'schedule-me',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    //jscs: disable
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com https://maxcdn.bootstrapcdn.com data: https://fonts.gstatic.com",
      'connect-src': "'self' https://schedule-me-api.herokuapp.com",
      'img-src': "'self' www.gravatar.com",
      'style-src': "'self' http://fonts.googleapis.com 'unsafe-inline' https://use.fonticons.com https://maxcdn.bootstrapcdn.com",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false,
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
