const { beforeEach } = require('vitest');
const { getInfo } = require('./app.js')

let server;
describe(' POST /', () => {
  beforeEach(() => {
    const {server} = require('./app.js');
  });
  afterEach(() => server.close())
} )

describe('getInfo()', () => {
  it('should yield "hi" ', () => {
    const result = getInfo();
    expect(result).toBe('hi');
  });

  it('should yield false"', () => {
    const result = getInfo();
    expect(result).not.toBe('hii');
  });
})
