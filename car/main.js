const { Board, Motor } = require('johnny-five');
const Invoker = require('./invoker.js');
const KeyboardInvoker = require('./keyboardInvoker.js');
const Car = require('./car.js');

var board = new Board({
  port: '/dev/rfcomm0',
  repl: false,
  debug: true,
});

board.on('ready', () => {
  const configs = Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
  var motorL = new Motor(configs.M2);
  var motorR = new Motor(configs.M1);
  var car = new Car(motorL, motorR);

  const commands = {
    'up': {
      start: () => {
        car.forward();
      },
      stop: () => {
        car.stop();
      }
    },
    'down': {
      start: () => {
        car.reverse();
      },
      stop: () => {
        car.stop();
      }
    },
    'left': {
      start: () => {
        car.left();
      },
      stop: () => {
        car.stop();
      }
    },
    'right': {
      start: () => {
        car.right();
      },
      stop: () => {
        car.stop();
      }
    }
  };
  var invoker = new Invoker(commands);
  var keyboardInvoker = new KeyboardInvoker(invoker, 'event5');

  keyboardInvoker.listen();

  board.on('exit', () => {
    invoker.stop('up');
  });

});
