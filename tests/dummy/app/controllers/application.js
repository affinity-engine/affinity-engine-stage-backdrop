import Ember from 'ember';
import backdrops from 'dummy/affinity-engine/fixtures/backdrops';

const { Controller } = Ember;

export default Controller.extend({
  config: {
    animationLibrary: 'velocity',
    transition: {
      effect: { opacity: 0.1 },
      duration: 100
    },
    component: {
      stage: {
        direction: {
          backdrop: {
            transition: {
              duration: 1000
            }
          }
        }
      }
    }
  },
  fixtures: {
    backdrops
  }
});
