const request = require('supertest');
const app = require('../app');
const Profile = require('../models/profile');

describe('Routes', () => {
  beforeEach(async () => {
    await Profile.deleteMany({});
  });

  describe('GET /api/profile', () => {
    it('returns an 404 error code if there are no profiles', async (done) => {
      const res = await request(app).get('/api/profile');
      expect(res.statusCode).toEqual(404);
      done();
    });
  });

  it('returns the profile registered in the system', async (done) => {});
});
