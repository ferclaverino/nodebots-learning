
class Invoker {

  constructor(commands) {
    this.commands = commands;
  }

  start(commandName) {
    if (this.commands[commandName]) this.commands[commandName].start();
  }

  stop(commandName) {
    if (this.commands[commandName]) this.commands[commandName].stop();
  }
}

module.exports = Invoker;
