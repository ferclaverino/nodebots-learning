
class Invoker {

  constructor(commands) {
    this.commands = commands;
  }

  start(commandName) {
    this.commands[commandName].start();
  }

  stop(commandName) {
    this.commands[commandName].stop();
  }
}

module.exports = Invoker;
