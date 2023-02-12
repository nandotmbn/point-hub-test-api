import { validateRegisterOwner, validateRoles } from '../src/validators';

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
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: 'jak@hendro.com',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'HelloRegex'
      });
      expect(validate.error).toBeUndefined();
    });
    it('Should be throwing error by given empty username', async () => {
      const validate = validateRegisterOwner({
        username: '',
        email: 'jak@hendro.com',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Username tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given short username', async () => {
      const validate = validateRegisterOwner({
        username: 'hei',
        email: 'jak@hendro.com',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Username setidaknya memiliki panjang 5 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given empty email', async () => {
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: '',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Email tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given invalid email', async () => {
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: 'helloemail.haha',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Email tidak valid!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given invalid role_id', async () => {
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: 'jak@hendro.com',
        role_id: 'ini roles id',
        password: 'HelloRegex'
      });
      expect(validate.error?.message).toBe('Roles id tidak valid dengan pola ObjectId!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given empty password', async () => {
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: 'jak@hendro.com',
        role_id: '63e91cc542643d38ef6bf51a',
        password: ''
      });
      expect(validate.error?.message).toBe('Password tidak boleh kosong!');
      expect(validate.error).not.toBeUndefined();
    });
    it('Should be throwing error by given short password', async () => {
      const validate = validateRegisterOwner({
        username: 'hendro',
        email: 'jak@hendro.com',
        role_id: '63e91cc542643d38ef6bf51a',
        password: 'ggwp'
      });
      expect(validate.error?.message).toBe('Password setidaknya memiliki panjang 8 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
  });
});
