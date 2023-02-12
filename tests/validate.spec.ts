import { validateRoles } from '../src/models/roles.model';

describe('Validate Body', () => {
  describe('Create Roles', () => {
    it('Should return error when roleName more than 64', async () => {
      const validate = validateRoles({
        roleName: 'qiwdiquwdhuiqdguqidbguydgquwdfwqudvqwudqfydfqudfvquqwfduyqdwfv dquwfdyuqwdfu'
      });
      expect(validate.error?.message).toBe('Nama depan tidak boleh melebihi 64 karakter!');
      expect(validate.error).not.toBeUndefined();
    });
  });
});
