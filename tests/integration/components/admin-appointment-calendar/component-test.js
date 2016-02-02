import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-appointment-calendar', 'Integration | Component | admin appointment calendar', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{admin-appointment-calendar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#admin-appointment-calendar}}
      template block text
    {{/admin-appointment-calendar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
