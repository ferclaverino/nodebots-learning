const { Board, Motor } = require('johnny-five');
const Invoker = require('./invoker.js');
const KeyboardInvoker = require('./keyboardInvoker.js');

var board = new Board({
  port: '/dev/rfcomm0',
  repl: false,
  debug: true,
});

board.on('ready', () => {
  const configs = Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
  var motorL = new Motor(configs.M2);
  var motorR = new Motor(configs.M1);
  // set 80% speed
  const speed = 255 * 0.8;

  const commands = {
    'up': {
      start: () => {
        motorL.forward(speed);
        motorR.forward(speed);
      },
      stop: () => {
        motorL.stop();
        motorR.stop();
      }
    },
    'down': {
      start: () => {
        motorL.reverse(speed);
        motorR.reverse(speed);
      },
      stop: () => {
        motorL.stop();
        motorR.stop();
      }
    },
    'left': {
      start: () => {
        motorL.reverse(speed);
        motorR.forward(speed);
      },
      stop: () => {
        motorL.stop();
        motorR.stop();
      }
    },
    'right': {
      start: () => {
        motorL.forward(speed);
        motorR.reverse(speed);
      },
      stop: () => {
        motorL.stop();
        motorR.stop();
      }
    }
  };
  var invoker = new Invoker(commands);
  var keyboardInvoker = new KeyboardInvoker(invoker, 'event6');

  keyboardInvoker.listen();

  board.on('exit', () => {
    invoker.stop('up');
  });

});
