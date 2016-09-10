import test from 'tape'
import server from '../../../src/server'

test('Server', t => {
  t.ok(server, 'should exist and import without error')
  t.end()
})

const promise = Promise.resolve()
test('Async test', async t => {
  const result = await promise
  t.end()
})