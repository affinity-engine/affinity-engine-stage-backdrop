export default {
  priority: 3,
  component: {
    stage: {
      direction: {
        backdrop: {
          attrs: {
            layer: 'stage.image.background',
            renderMethod: 'cover'
          }
        }
      }
    }
  }
};
