const Invoker = require('../../car/invoker');
const KeyboardInvoker = require('../../car/keyboardInvoker');

const commands = {
  'up': {
    start: () => console.log('start up'),
    stop: () => console.log('stop up')
  },
  'down': {
    start: () => console.log('start down'),
    stop: () => console.log('stop down')
  },
  'left': {
    start: () => console.log('start left'),
    stop: () => console.log('stop left')
  },
  'right': {
    start: () => console.log('start right'),
    stop: () => console.log('stop right')
  }
};
var invoker = new Invoker(commands);
var keyboardInvoker = new KeyboardInvoker(invoker, 'event5');

keyboardInvoker.listen();
