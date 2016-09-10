process.on('uncaughtException', e => {
  console.log(`Tests failed (uncaught exception), ${e && e.stack || e}`)
  process.exit(1)
})

const start = Date.now()
const millisToMinutesAndSeconds = millis => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

import test from 'tape'

import './unit/server/server.test.js'

test('afterAll', t => {
  t.end()
  console.log(`\nTests completed in: ${millisToMinutesAndSeconds(Date.now() - start)}s`)
  process.exit(0)
})
