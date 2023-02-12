import { extractToken } from '../src/utils';

describe('Utils Test', () => {
  describe('Extract Token Test', () => {
    it('Should be undefine and returning error by given empty authorization token', async () => {
      const result = extractToken('');
      expect(result.error).toBe('Token tidak ada!');
      expect(result.error).not.toBeUndefined();
    });
    it('Should be returning error by given empty non bearer type', async () => {
      const result = extractToken('APIKEY');
      expect(result.error).toBe('Token bukan bearer type!');
      expect(result.error).not.toBeUndefined();
    });
    it('Should be returning error by given non valid bearer type', async () => {
      const result = extractToken('Bearer mekanikal');
      expect(result.error).toBe('Token tidak valid!');
      expect(result.error).not.toBeUndefined();
    });
    it('Should be works', async () => {
      const result = await extractToken('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5NDUzYzE2NzUyY2QxNDY3ZWE2NDAiLCJpYXQiOjE2NzYyMzI0ODJ9.9CcP8kl-IRKTxGzEvMMW4SdA4o4Rbr4BOX6ABN6PHmo');
      expect(result.result._id).not.toBeUndefined()
    });
  });
});
