import Ember from 'ember';
import multiton from 'ember-multiton-service';
import { registrant } from 'affinity-engine';
import { Direction } from 'affinity-engine-stage';

const {
  get,
  isEmpty,
  merge,
  set,
  typeOf
} = Ember;

export default Direction.extend({
  componentPath: 'affinity-engine-stage-direction-backdrop',
  layer: 'engine.stage.background.backdrop',

  config: multiton('affinity-engine/config', 'engineId'),
  fixtureStore: multiton('affinity-engine/fixture-store', 'engineId'),
  preloader: registrant('affinity-engine/preloader'),

  _setup(fixtureOrId) {
    this._entryPoint();

    const fixtureStore = get(this, 'fixtureStore');
    const fixture = typeOf(fixtureOrId) === 'object' ? fixtureOrId : fixtureStore.find('backdrops', fixtureOrId);
    const id = get(fixture, 'id');
    const preloader = get(this, 'preloader');

    if (!get(preloader, 'isPlaceholder')) {
      const imageId = preloader.idFor(fixture, 'src');
      const imageElement = preloader.getElement(imageId);

      set(fixture, 'imageElement', imageElement);
    }

    set(this, 'attrs.fixture', fixture);
    set(this, 'id', id);

    if (isEmpty(get(this, '_$instance'))) {
      const transition = { type: 'transition', queue: 'main' };

      get(this, 'attrs.transitions').pushObject(transition);
      set(this, 'hasDefaultTransition', true);
    }

    return this;
  },

  _reset() {
    const fixture = get(this, 'attrs.fixture');

    return this._super({ fixture, transitions: Ember.A() });
  },

  caption(caption) {
    this._entryPoint();

    set(this, 'attrs.caption', caption);

    return this;
  },

  delay(delay, options = {}) {
    this._removeDefaultTransition();
    this._entryPoint();

    const transitions = get(this, 'attrs.transitions');

    transitions.pushObject(merge({ delay, type: 'delay', queue: 'main' }, options));

    return this;
  },

  transition(effect, duration, options = {}) {
    this._removeDefaultTransition();
    this._entryPoint();

    const transitions = get(this, 'attrs.transitions');

    transitions.pushObject(merge({ duration, effect, type: 'transition', queue: 'main' }, options));

    return this;
  },

  _removeDefaultTransition() {
    if (get(this, 'hasDefaultTransition')) {
      set(this, 'hasDefaultTransition', false);
      set(this, 'attrs.transitions', Ember.A());
    }
  }
});
