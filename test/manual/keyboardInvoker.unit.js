const Invoker = require('../../car/invoker');
const KeyboardInvoker = require('../../car/keyboardInvoker');

const commands = {
  'up': {
    start: () => console.log('start up')
  },
  'down': {
    start: () => console.log('start down')
  },
  'left': {
    start: () => console.log('start left')
  },
  'right': {
    start: () => console.log('start right')
  },
  'space': {
    start: () => console.log('start space')
  }
};
var invoker = new Invoker(commands);
var keyboardInvoker = new KeyboardInvoker(invoker, 'event6');

keyboardInvoker.listen();
