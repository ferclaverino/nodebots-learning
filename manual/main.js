const { Board, Motor } = require('johnny-five');
const KeyboardInvoker = require('./keyboardInvoker.js');

const board = new Board({
  port: '/dev/rfcomm0',
  repl: false,
  debug: true,
});

board.on('ready', () => {
  const configs = Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
  const motorL = new Motor(configs.M2);
  const motorR = new Motor(configs.M1);
  // set 80% speed
  const speed = 255 * 0.8;

  const commands = {
    'q': () => process.exit(),
    'up': () => {
      motorL.forward(speed);
      motorR.forward(speed);
    },
    'down': () => {
      motorL.reverse(speed);
      motorR.reverse(speed);
    },
    'left': () => {
      motorL.reverse(speed);
      motorR.forward(speed);
    },
    'right': () => {
      motorL.forward(speed);
      motorR.reverse(speed);
    },
    'space': () => {
      // stop
      motorL.stop();
      motorR.stop();
    }
  };
  const keyboardInvoker = new KeyboardInvoker(commands);

  keyboardInvoker.listen();

  board.on('exit', () => {
    keyboardInvoker.execute('space');
  });

});
