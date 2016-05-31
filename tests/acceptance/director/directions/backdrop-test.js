import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../../../tests/helpers/module-for-acceptance';
import { $hook, hook } from 'ember-hook';

moduleForAcceptance('Acceptance | ember-theater/director/directions/backdrop', {
  beforeEach() {
    Ember.$.Velocity.mock = true;
  },

  afterEach() {
    Ember.$.Velocity.mock = false;
  }
});

test('Ember Theater | Director | Directions | Backdrop', function(assert) {
  assert.expect(13);

  visit('/ember-theater/test-scenarios/director/directions/backdrop').then(() => {
    assert.ok($hook('backdrop_direction').length > 0, 'backdrop is rendered');
    assert.equal(parseFloat($hook('backdrop_direction').css('opacity')).toFixed(1), '0.1', 'by default uses the config setting to `transition`');
    assert.equal(Ember.$(`${hook('backdrop_direction')} img`).attr('alt'), 'Classroom', '`alt` is set by the fixture `caption`');
    assert.ok(Ember.$(`${hook('backdrop_direction')} img`).attr('src').match('theater/backdrops/classroom.png'), 'it sets the `src` based on the associated fixture');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat($hook('backdrop_direction').css('opacity')).toFixed(1), 0.2, '`transition` sets backdrop css');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat($hook('backdrop_direction').css('opacity')).toFixed(1), 0.5, '`transition`s can be chained');

    return step(100);
  }).then(() => {
    assert.equal(Ember.$(`${hook('backdrop_direction')} img`).attr('alt'), 'foo', '`alt` can be set by direction function `caption`');

    return step(100);
  }).then(() => {
    assert.equal($hook('backdrop_direction').length, 2, 'multiple instances of the same backdrop can be rendered by setting `instance`');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat(Ember.$(`${hook('backdrop_direction')}:first`).css('opacity')).toFixed(1), 0.5, 'instances respond independently to `transition`s: 1');
    assert.equal(parseFloat(Ember.$(`${hook('backdrop_direction')}:nth(1)`).css('opacity')).toFixed(1), 0.6, 'instances respond independently to `transition`s: 2');

    return step(100);
  }).then(() => {
    assert.equal($hook('backdrop_direction').length, 3, 'backdrops with different fixtures can co-exist on screen');

    return step(100);
  }).then(() => {
    assert.equal($hook('backdrop_direction').length, 4, '`Backdrop` can be passed a fixture directly');
    assert.ok(Ember.$(`${hook('backdrop_direction')}:nth(3) img`).attr('src').match('theater/backdrops/beach-night.jpg'), 'the manually defined backdrop src is set properly');
  });
});
