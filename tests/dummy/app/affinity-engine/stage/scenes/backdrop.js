import { Scene, step } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  name: 'Image Direction Test',

  start: task(function * (script) {
    const classroom = script.backdrop('classroom');

    yield step();
    classroom.transition({ opacity: 0.2 });

    yield step();
    yield classroom.transition({ opacity: 0.3 }).transition({ opacity: 0.4 }).transition({ opacity: 0.5 });

    yield step();
    classroom.caption('foo');

    yield step();
    const classroom2 = yield script.backdrop('classroom').transition({ opacity: 0.8 });

    yield step();
    yield classroom2.transition({ opacity: 0.6 });

    yield step();
    const beach = yield script.backdrop('beach');

    yield step();
    yield script.backdrop({
      keyframes: [{
        id: {
          caption: 'beach during the night',
          src: 'affinity-engine/backdrops/beach-night.jpg'
        }
      }]
    });

    yield step();
    beach.keyframe({ time: 'night' });
  })
});
