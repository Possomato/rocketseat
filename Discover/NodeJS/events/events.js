const { EventEmitter } = require('events')
const ev = new EventEmitter

ev.on('Algo A DIZER', () => {
    console.log('eu lhe ouço')
})

ev.emit('Algo A DIZER')