export default [{
  id: 'classroom',
  layerOrder: ['base'],
  compositions: {
    default: {
      base: 'classroom'
    }
  }
}, {
  id: 'beach',
  layerOrder: ['base'],
  compositions: {
    default: {
      base: 'beach-day'
    },
    night: {
      base: 'beach-night'
    }
  }
}]
