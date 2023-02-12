import { validateRegister, validateRoles } from '../src/validators';

describe('Validate Body', () => {
  describe('Create Roles', () => {
    it('Should return error when roleName more than 64', async () => {
      const validate = validateRoles({
        roleName: 'qiwdiquwdhuiqdguqidbguydgquwdfwqudvqwudqfydfqudfvquqwfduyqdwfv dquwfdyuqwdfu'
      });
      expect(validate.error?.message).toBe('Nama role tidak boleh melebihi 64 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
  });
  describe('Create Project Owner', () => {
    it('Should works', async () => {
      const validate = validateRegister({
        username: 'hendro',
        email: 'jak@hendro.com',
        password: 'HelloRegex'
      });
      expect(validate.error).toBeUndefined();
    });
    it('Should be throwing error by given empty username', async () => {
      const validate = validateRegister({
        username: '',
        email: 'jak@hendro.com',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Username tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given short username', async () => {
      const validate = validateRegister({
        username: 'hei',
        email: 'jak@hendro.com',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Username setidaknya memiliki panjang 5 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given empty email', async () => {
      const validate = validateRegister({
        username: 'hendro',
        email: '',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Email tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given invalid email', async () => {
      const validate = validateRegister({
        username: 'hendro',
        email: 'helloemail.haha',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Email tidak valid!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given empty password', async () => {
      const validate = validateRegister({
        username: 'hendro',
        email: 'jak@hendro.com',
        password: ''
      });
      expect(validate.error?.message).toBe('Password tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given short password', async () => {
      const validate = validateRegister({
        username: 'hendro',
        email: 'jak@hendro.com',
        password: 'ggwp'
      });
      expect(validate.error?.message).toBe('Password setidaknya memiliki panjang 8 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
  });
});
