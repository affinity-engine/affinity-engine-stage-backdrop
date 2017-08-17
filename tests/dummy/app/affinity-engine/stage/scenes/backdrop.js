import { Scene, step } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  name: 'Image Direction Test',

  start: task(function * (script) {
    const classroom = script.backdrop('classroom');

    yield step();
    classroom.transition({ effect: { opacity: 0.2 } });

    yield step();
    yield classroom.transition({ effect: { opacity: 0.3 } }).transition({ effect: { opacity: 0.4 } }).transition({ effect: { opacity: 0.5 } });

    yield step();
    const classroom2 = yield script.backdrop('classroom').transition({ effect: { opacity: 0.8 } });

    yield step();
    yield classroom2.transition({ effect: { opacity: 0.6 } });

    yield step();
    const beach = yield script.backdrop('beach');

    yield step();
    beach.keyframe('night');
  })
});
