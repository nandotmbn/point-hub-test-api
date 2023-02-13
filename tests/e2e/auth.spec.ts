import supertest from 'supertest';
import { http } from '../../index';

const request = supertest(http);

describe('Authentication Test', () => {
  describe('Login', () => {
    it('Should be 400 when Accept Language is not set', async () => {
      const res = await request.post('/api/v1/auth/login');
      expect(res.body.message).toBe('Accept Language does not exist');
      expect(res.statusCode).toBe(400);
    });
    it('Should be 400 when Body is not set', async () => {
      const res = await request.post('/api/v1/auth/login').set('Accept-Language', '');
      expect(res.body.message).toBe('Accept Language does not exist');
      expect(res.statusCode).toBe(400);

      const res2 = await request.post('/api/v1/auth/login').set('Accept-Language', 'wadwad');
      expect(res2.body.message).toBe('Accept Language Not Included');
      expect(res2.statusCode).toBe(400);
    });
    it('Should be 400 when Body is not valid', async () => {
      const res = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({});
      expect(res.statusCode).toBe(400);

      const res2 = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        hello: 'hh',
        hai: 'awdad'
      });
      expect(res2.body.message).toBe('Bad Request');
      expect(res2.statusCode).toBe(400);

      const res3 = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        email: 'hh',
        password: 'awdad'
      });
      expect(res3.body.message).toBe('Bad Request');
      expect(res3.statusCode).toBe(400);

      const res4 = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        email: 'orlando@point.com',
        password: 'short'
      });
      expect(res4.body.message).toBe('Bad Request');
      expect(res4.statusCode).toBe(400);
    });
    it('Should be 404 when email is not registered', async () => {
      const res = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        email: 'notfound@point.com',
        password: 'shortsss'
      });
      expect(res.body.message.toString().includes('tidak ditemukan')).toBe(true);
      expect(res.statusCode).toBe(404);
    });
    it('Should be 403 when password is wrong', async () => {
      const res = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        email: 'orlando@point.com',
        password: 'shortsss'
      });
      expect(res.body.message.toString().includes('Invalid password')).toBe(true);
      expect(res.statusCode).toBe(403);
    });
    it('Should be works', async () => {
      const res = await request.post('/api/v1/auth/login').set('Accept-Language', 'id-ID').send({
        email: 'orlando@point.com',
        password: 'helloworld'
      });
      expect(res.body.message).toBe('You have successfully logged in!');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('Register', () => {
    it('Should be 400 when Accept Language is not set', async () => {
      const res = await request.post('/api/v1/auth/register');
      expect(res.body.message).toBe('Accept Language does not exist');
      expect(res.statusCode).toBe(400);
    });
    it('Should be 400 when Body is not set', async () => {
      const res = await request.post('/api/v1/auth/register').set('Accept-Language', '');
      expect(res.body.message).toBe('Accept Language does not exist');
      expect(res.statusCode).toBe(400);

      const res2 = await request.post('/api/v1/auth/register').set('Accept-Language', 'wadwad');
      expect(res2.body.message).toBe('Accept Language Not Included');
      expect(res2.statusCode).toBe(400);
    });
    it('Should be 400 when Body is not valid', async () => {
      const res = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({});
      expect(res.statusCode).toBe(400);

      const res2 = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({
        hello: 'hh',
        hai: 'awdad'
      });
      expect(res2.body.message).toBe('Bad Request');
      expect(res2.statusCode).toBe(400);

      const res3 = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({
        username: 'halo',
        email: 'orlandopoint.com',
        password: 'hehe'
      });
      expect(res3.body.message).toBe('Bad Request');
      expect(res3.statusCode).toBe(400);

      const res4 = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({
        username: 'halo',
        email: 'orlandopoint.com',
        password: 'hehe'
      });
      expect(res4.body.message).toBe('Bad Request');
      expect(res4.statusCode).toBe(400);
    });
    it('Should be 400 when email is registered', async () => {
      const res = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({
        username: 'Orlando',
        email: 'orlando@point.com',
        password: 'helloworld'
      });
      expect(res.body.message.toString().includes('User sudah pernah didaftarkan')).toBe(true);
      expect(res.statusCode).toBe(400);
    });
    
    it('Should be works', async () => {
      const res = await request.post('/api/v1/auth/register').set('Accept-Language', 'id-ID').send({
        username: 'Orlando 2',
        email: 'orlando2@point.com',
        password: 'helloworld'
      });
      expect(res.body.message).toBe('User berhasil didaftarkan');
      expect(res.statusCode).toBe(201);
    });
  });
});
