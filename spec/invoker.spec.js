const Invoker = require('../manual/invoker.js');

describe('invoker', ()=> {

  describe('given invoker with up command', ()=> {
    var invoker;
    var upCommand;
    beforeEach(() => {
      upCommand = {
        start: () => {}
      };
      spyOn(upCommand, 'start');
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

  });
});
