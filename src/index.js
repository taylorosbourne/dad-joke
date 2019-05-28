const {Command, flags} = require('@oclif/command')
const fetch = require('node-fetch')
const API = 'https://icanhazdadjoke.com/'

const getDadJoke = async () => {
  const res = await fetch(API, {
    headers: {
      Accept: 'application/json'
    }
  })
  const data = await res.json()
  console.log(data.joke)
}
class DadJokeCommand extends Command {
  async run() {
    getDadJoke()
  }
}

DadJokeCommand.description = `There isn't much to it!  You want Dad jokes?  You'll get 'em!`

DadJokeCommand.flags = {
   version: flags.version({char: 'v'}),
   help: flags.help({char: 'h'}),
}

module.exports = DadJokeCommand
