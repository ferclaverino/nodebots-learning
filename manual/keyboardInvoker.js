const keypress = require('keypress');

class KeyboardInvoker {
  constructor(commands) {
    this.commands = commands;
    keypress(process.stdin);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);
  }

  listen() {
    process.stdin.on('keypress', (ch, key) => {
      this.execute(key.name);
    });
  }

  execute(commandName) {
    if (this.commands[commandName]) {
      this.commands[commandName]();
    }
  }

}

module.exports = KeyboardInvoker;
