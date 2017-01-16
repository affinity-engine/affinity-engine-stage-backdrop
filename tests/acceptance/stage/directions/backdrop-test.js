import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../../../tests/helpers/module-for-acceptance';
import { $hook, hook } from 'ember-hook';

moduleForAcceptance('Acceptance | affinity-engine/stage/directions/backdrop', {
  beforeEach() {
    Ember.$.Velocity.mock = true;
  },

  afterEach() {
    Ember.$.Velocity.mock = false;
  }
});

test('Affinity Engine | stage | Directions | Image', function(assert) {
  assert.expect(9);

  const done = assert.async();

  visit('/backdrop').then(() => {
    assert.ok($hook('affinity_engine_stage_direction_image').length > 0, 'backdrop is rendered');
    assert.equal(parseFloat($hook('affinity_engine_stage_direction_image').children(hook('ember_animation_box')).css('opacity')).toFixed(1), '0.0', 'begins unfaded');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat($hook('affinity_engine_stage_direction_image').children(hook('ember_animation_box')).css('opacity')).toFixed(1), 0.2, '`transition` sets backdrop css');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat($hook('affinity_engine_stage_direction_image').children(hook('ember_animation_box')).css('opacity')).toFixed(1), 0.5, '`transition`s can be chained');

    return step(100);
  }).then(() => {
    assert.equal($hook('affinity_engine_stage_direction_image').length, 2, 'multiple instances of the same backdrop can be rendered by setting `instance`');

    return step(100);
  }).then(() => {
    assert.equal(parseFloat(Ember.$(`${hook('affinity_engine_stage_direction_image')}:first`).children(hook('ember_animation_box')).css('opacity')).toFixed(1), 0.5, 'instances respond independently to `transition`s: 1');
    assert.equal(parseFloat(Ember.$(`${hook('affinity_engine_stage_direction_image')}:nth(1)`).children(hook('ember_animation_box')).css('opacity')).toFixed(1), 0.6, 'instances respond independently to `transition`s: 2');

    return step(100);
  }).then(() => {
    assert.equal($hook('affinity_engine_stage_direction_image').length, 3, 'backdrops with different fixtures can co-exist on screen');

    return step(100);
  }).then(() => {
    assert.equal($hook('affinity_engine_stage_direction_image').length, 3, '`frame` does not create a new backdrop');

    done();
  });
});
