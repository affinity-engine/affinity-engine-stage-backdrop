export default {
  priority: 3,
  default: {
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
  }
};
