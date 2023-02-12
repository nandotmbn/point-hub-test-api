import connectDatabase from '../src/databases/connect.database';

describe('Database Test', () => {
  it('Should be throwing error', async () => {
    expect(connectDatabase('')).rejects.toThrow();
  });
  it('Should be returning true', async () => {
    expect(
      connectDatabase(
        'mongodb+srv://orlandosykes:orlandosykes@technorcluster.0ayow.mongodb.net/Boilerplate?retryWrites=true&w=majority'
      )
    ).resolves.toBe(true);
  });
});
