
class Car {

  constructor(motorL, motorR) {
    this.motorL = motorL;
    this.motorR = motorR;

    // set 80% speed
    this.speed = 255 * 0.8;
  }

  forward() {
    this.motorL.forward(this.speed);
    this.motorR.forward(this.speed);
  }

  reverse() {
    this.motorL.reverse(this.speed);
    this.motorR.reverse(this.speed);
  }

  left() {
    this.motorL.reverse(this.speed);
    this.motorR.forward(this.speed);
  }

  right() {
    this.motorL.forward(this.speed);
    this.motorR.reverse(this.speed);
  }

  stop() {
    this.motorL.stop();
    this.motorR.stop();
  }

}

module.exports = Car;
