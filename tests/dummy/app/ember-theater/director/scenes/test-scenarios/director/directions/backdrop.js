import { Scene, step } from 'ember-theater-director';

export default Scene.extend({
  name: 'backdrop Direction Test',

  start: async function(script) {
    const classroom = script.backdrop('classroom');

    await step();
    classroom.transition({ opacity: 0.2 });

    await step();
    await classroom.transition({ opacity: 0.3 }).transition({ opacity: 0.4 }).transition({ opacity: 0.5 });

    await step();
    classroom.caption('foo');

    await step();
    const classroom2 = await script.backdrop('classroom').transition({ opacity: 0.8 });

    await step();
    await classroom2.transition({ opacity: 0.6 });

    await step();
    await script.backdrop('beach-day');

    await step();
    await script.backdrop({
      id: 'beach-night',
      caption: 'beach during the night',
      src: 'theater/backdrops/beach-night.jpg'
    });
  }
});
