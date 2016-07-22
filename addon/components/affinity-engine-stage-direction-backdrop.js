import Ember from 'ember';
import multiton from 'ember-multiton-service';
import { configurable, deepArrayConfigurable, registrant } from 'affinity-engine';
import { DirectableComponentMixin, TransitionableComponentMixin, TransitionableComponentAutoMixin } from 'affinity-engine-stage';

const {
  Component,
  computed,
  get,
  observer
} = Ember;

const { inject: { service } } = Ember;

const configurationTiers = [
  'directable.attrs',
  'directable.attrs.fixture',
  'config.attrs.stage.backdrop',
  'config.attrs.globals'
];

export default Component.extend(DirectableComponentMixin, TransitionableComponentMixin, TransitionableComponentAutoMixin, {
  classNames: ['ae-stage-direction-backdrop-container'],
  hook: 'affinity_engine_stage_direction_backdrop',

  translator: service('affinity-engine/translator'),

  config: multiton('affinity-engine/config', 'engineId'),
  preloader: registrant('affinity-engine/preloader'),

  caption: configurable(configurationTiers, 'caption'),
  src: configurable(configurationTiers, 'src'),
  imageElement: configurable(configurationTiers, 'imageElement'),
  transitions: deepArrayConfigurable(configurationTiers, 'directable.attrs.transitions', 'transition'),

  didInsertElement(...args) {
    this._super(...args);

    const captionTranslation = get(this, 'captionTranslation');
    const image = get(this, 'image');
    const $image = this.$(image).clone();

    $image.addClass('ae-stage-direction-backdrop');
    $image.attr('alt', captionTranslation);

    this.$().append($image);
  },

  captionTranslation: computed('directable.attrs.fixture.id', 'caption', {
    get() {
      const translation = get(this, 'caption') || `backdrops.${get(this, 'directable.attrs.fixture.id')}`;

      return get(this, 'translator').translate(translation);
    }
  }).readOnly(),

  image: computed({
    get() {
      return get(this, 'imageElement') || `<img src="${get(this, 'src')}">`;
    }
  }).readOnly(),

  changeCaption: observer('captionTranslation', function() {
    const caption = get(this, 'captionTranslation');

    this.$('img').attr('alt', caption);
  })
});
