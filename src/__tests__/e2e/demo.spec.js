var Application = require('spectron').Application;

var app = new Application({
  path: '/Applications/Atom.app/Contents/MacOS/Atom'
});

const keys = {
  control: '\uE009',
  alt: '\uE00A',
};

beforeEach(() => app.start());
afterEach(() => (app && app.isRunning()) ? app.stop() : null);


describe('App', () => {

  it('should start', () => {
    expect(app.isRunning()).toBe(true);
  });

});