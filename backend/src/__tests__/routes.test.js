const request = require('supertest');
const app = require('../app');
const Profile = require('../models/profile');
const mock = require('../data/mockData');

describe('Routes', () => {
  beforeEach(async () => {
    await Profile.deleteMany({});
  });

  describe('GET /api/profile', () => {
    it('returns null if there are no profiles', async (done) => {
      const res = await request(app).get('/api/profile');
      expect(res.body).toEqual(null);
      done();
    });

    it('returns the profile registered in the system', async (done) => {
      const profile = Profile({ name: 'Test' });
      await profile.save();

      const res = await request(app).get('/api/profile');
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  describe('POST /api/profile', () => {
    it('returns a success status code', async (done) => {
      const profile = mock;

      const res = await request(app).post('/api/profile').send(profile);
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
