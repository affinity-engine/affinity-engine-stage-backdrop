export default [{
  id: 'classroom',
  defaultIdentifiers: 'classroom',
  layerOrder: ['base'],
  layers: {
    base: [{
      id: 'classroom',
      keyframe: 'classroom'
    }]
  }
}, {
  id: 'beach',
  defaultIdentifiers: 'day',
  layerOrder: ['base'],
  layers: {
    base: [{
      id: 'day',
      keyframe: 'beach-day'
    }, {
      id: 'night',
      keyframe: 'beach-night'
    }]
  }
}]
