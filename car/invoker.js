
class Invoker {

  constructor(commands) {
    this.commands = commands;
  }

  hasCommand(commandName) {
    return this.commands[commandName] ? true : false;
  }

  start(commandName) {
    if (this.hasCommand(commandName)) this.commands[commandName].start();
  }

  stop(commandName) {
    if (this.hasCommand(commandName)) this.commands[commandName].stop();
  }
}

module.exports = Invoker;
