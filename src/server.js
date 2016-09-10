import bluebird from 'bluebird'
import express from 'express'
import { uncaughtExceptionHandler, onPossiblyUnhandledRejectionHandler } from './modules/errors'

process.on('uncaughtException', uncaughtExceptionHandler)
bluebird.onPossiblyUnhandledRejection(onPossiblyUnhandledRejectionHandler)

import './modules/load'

const app = express()

app.set('view engine', 'html')

app.get('*', (req, res) => res.end('ok'))

const port = process.env.PORT || 3000
const server = app.listen(port, () => console.log(`Service is now running on port ${port}`))

export default server
