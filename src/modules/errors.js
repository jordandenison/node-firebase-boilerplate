export const uncaughtExceptionHandler = err => {
  console.log(`uncaught exception: ${err && err.stack || err}`)
  process.exit(1)
}

export const onPossiblyUnhandledRejectionHandler = err => {
  console.log(`Possibly unhandled bluebird exception: ${err && err.stack || err}`)
}
