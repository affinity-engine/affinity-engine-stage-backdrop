import Ember from 'ember';
import { ImageDirection } from 'affinity-engine-stage-direction-image';

const {
  computed,
  get
} = Ember;

export default ImageDirection.extend({
  componentPath: 'affinity-engine-stage-direction-image',
  keyframeParentCategory: 'backdrops',
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
  })
});
