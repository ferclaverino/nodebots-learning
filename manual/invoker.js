
class Invoker {

  constructor(commands) {
    this.commands = commands;
  }

  start(commandName) {
    this.commands[commandName].start();
  }
}

module.exports = Invoker;
