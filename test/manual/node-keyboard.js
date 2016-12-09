const Keyboard = require('../../lib/node-keyboard/keyboard.js');

const k = new Keyboard('event6'); // 'event6' is the file corresponding to my keyboard in /dev/input/
k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);

k.on('error', console.error); // Something wrent wrong, keyboard disconnected or something
