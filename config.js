const convict = require('convict')

const config = convict({
  env: {
    doc: 'App environment',
    format: ['dev', 'perf'],
    default: 'dev',
    env: 'TO_ENV'
  }
})

config.validate({ allowed: 'strict' })

export { config }
