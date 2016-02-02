import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appointment-calendar-cell', 'Integration | Component | appointment calendar cell', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{appointment-calendar-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#appointment-calendar-cell}}
      template block text
    {{/appointment-calendar-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
