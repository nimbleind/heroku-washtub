exports.commands = [
  require('./commands/washtub/init'),
  require('./commands/washtub/list'),
  require('./commands/washtub/pull'),
  require('./commands/washtub/wash')
]

exports.topic = {
  name: 'washtub',
  description: 'Tools to anonymize production data for use in development'
}
