const KeyboardInvoker = require('../../car/keyboardInvoker');

const commands = {
  'q': () => process.exit(),
  'up': () => {
    console.log('up');
  },
  'down': () => {
    console.log('down');
  },
  'left': () => {
    console.log('left');
  },
  'right': () => {
    console.log('right');
  },
  'space': () => {
    console.log('space');
  }
};
var keyboardInvoker = new KeyboardInvoker(commands);

keyboardInvoker.listen();
