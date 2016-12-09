const Keyboard = require('node-keyboard');

class KeyboardInvoker {
  constructor(invoker, event) {
    this.keyboard = new Keyboard(event);
    this.invoker = invoker;
  }

  listen() {
    this.keyboard.on('keypress', (key) => {
      var keyName = key.keyId.replace('KEY_', '').toLowerCase();
      this.invoker.start(keyName);
    });
  }

}

module.exports = KeyboardInvoker;
