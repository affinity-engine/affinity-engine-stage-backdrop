import { ImageDirection } from 'affinity-engine-stage-direction-image';

export default ImageDirection.extend({
  componentPath: 'affinity-engine-stage-direction-image',
  keyframeParentCategory: 'backdrops',

  _configurationTiers: [
    'component.stage.direction.backdrop',
    'backdrop',
    'component.stage.direction.image',
    'image',
    'component.stage.direction.all',
    'component.stage.all',
    'all'
  ]
});
