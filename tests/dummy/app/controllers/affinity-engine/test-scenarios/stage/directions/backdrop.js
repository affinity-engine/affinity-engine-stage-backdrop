import Ember from 'ember';
import backdrops from 'dummy/affinity-engine/fixtures/backdrops';

const { Controller } = Ember;

export default Controller.extend({
  config: {
    globals: {
      transition: {
        effect: { opacity: 0.1 },
        duration: 100
      }
    },
    stage: {
      backdrop: {
        transition: {
          duration: 1000
        }
      }
    }
  },
  fixtures: {
    backdrops
  }
});
