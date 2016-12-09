const Invoker = require('../../manual/invoker.js');

describe('invoker', ()=> {

  describe('given invoker with up command', ()=> {
    var invoker;
    var upCommand;
    beforeEach(() => {
      upCommand = {
        start: () => {},
        stop: () => {}
      };
      spyOn(upCommand, 'start');
      spyOn(upCommand, 'stop');
      invoker = new Invoker({
        up: upCommand
      });
    });

    describe('when start up', ()=> {
      beforeEach(() => invoker.start('up'));
      it('then start up command is called', ()=> {
        expect(upCommand.start).toHaveBeenCalled();
      });
    });

    describe('when stop up', ()=> {
      beforeEach(() => invoker.stop('up'));
      it('then stop up command is called', ()=> {
        expect(upCommand.stop).toHaveBeenCalled();
      });
    });

    describe('when start down', ()=> {
      beforeEach(() => invoker.start('down'));
      it('then commands are not called', ()=> {
        expect(upCommand.start).not.toHaveBeenCalled();
        expect(upCommand.stop).not.toHaveBeenCalled();
      });
    });

    describe('when stop down', ()=> {
      beforeEach(() => invoker.stop('down'));
      it('then commands are not called', ()=> {
        expect(upCommand.start).not.toHaveBeenCalled();
        expect(upCommand.stop).not.toHaveBeenCalled();
      });
    });

  });
});
