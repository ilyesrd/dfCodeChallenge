const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  try {
    const user = [];

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {}
};

const signup = async (req, res, next) => {
  try {
    let user = req.body;
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    created_user = await User.create(user);

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {}
};

module.exports = {
  login,
  signup,
};
