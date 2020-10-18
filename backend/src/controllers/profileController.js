const Profile = require('../models/profile');
const HttpError = require('../models/http-error');

const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.find({});
    if (profile.length < 1) {
      const error = new HttpError('Profile não encontrado', 404);
      return next(error);
    }
    return res.status(200).json(profile);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the profile',
      500
    );
    return next(error);
  }
};

module.exports = { getProfile };
