const { Board, Motor } = require('johnny-five');
const keypress = require('keypress');

const board = new Board({
  port: '/dev/rfcomm0',
  repl: false,
  debug: true,
});

keypress(process.stdin);
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);

board.on('ready', () => {
  const configs = Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
  const motorL = new Motor(configs.M2);
  const motorR = new Motor(configs.M1);
  // set 80% speed
  const speed = 255 * 0.8;

  process.stdin.on('keypress', (ch, key) => {
    if (!key) {
      return;
    } else if (key.name === 'q') {
      process.exit();
    } else if (key.name === 'up') {
      // forward
      motorL.forward(speed);
      motorR.forward(speed);
    } else if (key.name === 'down') {
      // reverse
      motorL.reverse(speed);
      motorR.reverse(speed);
    } else if (key.name === 'left') {
      // left
      motorL.reverse(speed);
      motorR.forward(speed);
    } else if (key.name === 'right') {
      // right
      motorL.forward(speed);
      motorR.reverse(speed);
    } else if (key.name === 'space') {
      // stop
      motorL.stop();
      motorR.stop();
    }
  });

  board.on('exit', () => {
    // stop
    motorL.stop();
    motorR.stop();
  });

});
