import { ImageDirection } from 'affinity-engine-stage-direction-image';

export default ImageDirection.extend({
  componentPath: 'affinity-engine-stage-direction-image',
  keyframeParentCategory: 'backdrops',
  layer: 'engine.stage.background.backdrop',

  _configurationTiers: [
    'global',
    'component.stage',
    'image',
    'component.stage.direction.image',
    'backdrop',
    'component.stage.direction.backdrop'
  ]
});
