const { port } = require('../src/core/http.core');

describe('Core Test', () => {
  describe('HTTP', () => {
    it('Should be returing valid port', async () => {
      expect(port).not.toBeNull();
    });
    it('Should be returing numerical port', async () => {
      expect(typeof port).toBe('number');
    });
  });
});
