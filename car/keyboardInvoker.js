const Keyboard = require('node-keyboard');

function mapKeyName(keyId) {
  return keyId.replace('KEY_', '').toLowerCase();
}

class KeyboardInvoker {

  constructor(invoker, event) {
    this.keyboard = new Keyboard(event);
    this.invoker = invoker;
    this.lastEvent = {
      event: null,
      key: null
    };
  }

  executeCommand(event, key, command) {
    if (this.lastEvent.event !== event && this.lastEvent.key !== key) {
      this.lastEvent = {
        key: key,
        event: event
      };
      var keyName = mapKeyName(key.keyId);
      command(keyName);
    }
  }

  listen() {
    this.keyboard.on('keydown', (key) => {
      this.executeCommand('keydown', key, (command) => this.invoker.start(command))
    });

    this.keyboard.on('keyup', (key) => {
      this.executeCommand('keyup', key, (command) => this.invoker.stop(command))
    });
  }

}

module.exports = KeyboardInvoker;
