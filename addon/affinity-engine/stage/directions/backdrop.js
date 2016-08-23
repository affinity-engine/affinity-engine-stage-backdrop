import Ember from 'ember';
import { ImageDirection } from 'affinity-engine-stage-direction-image';

const {
  computed,
  get,
  set
} = Ember;

export default ImageDirection.extend({
  componentPath: 'affinity-engine-stage-direction-image',
  layer: 'engine.stage.background.backdrop',

  _configurationTiers: [
    'attrs',
    'attrs.keyframe',
    'attrs.keyframeParent',
    'config.attrs.component.stage.direction.backdrop',
    'config.attrs.component.stage.direction.image',
    'config.attrs.component.stage',
    'config.attrs'
  ],

  _directableDefinition: computed('_baseImageDirectableDefinition', {
    get() {
      return get(this, '_baseImageDirectableDefinition');
    }
  }),

  _setup(fixtureOrId) {
    this._entryPoint();

    const backdrop = this._findFixture('backdrops', fixtureOrId);

    set(this, 'attrs.keyframeParent', backdrop);
    set(this, 'attrs.keyframe', this._findKeyframe(backdrop));

    return this;
  }
});
