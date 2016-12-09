const keypress = require('keypress');

class KeyboardInvoker {
  constructor(invoker) {
    this.invoker = invoker;
    keypress(process.stdin);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);
  }

  listen() {
    process.stdin.on('keypress', (ch, key) => {
      this.invoker.start(key.name);
    });
  }

}

module.exports = KeyboardInvoker;
