const Profile = require('../models/profile');
const HttpError = require('../models/http-error');

const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({});
    return res.status(200).json(profile);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not fetch the profile',
      500
    );
    return next(error);
  }
};

const createProfile = async (req, res, next) => {
  try {
    await Profile.deleteMany({});
    console.log(req.name);
    const profile = new Profile({ name: req.name });
    await profile.save();
    return res.status(200).json(profile);
  } catch (err) {
    const error = new HttpError(
      'Something wrong. Could not create the profile',
      500
    );
    return next(error);
  }
};

module.exports = { getProfile, createProfile };
