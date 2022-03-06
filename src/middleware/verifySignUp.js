const { User } = require("../database/models");

checkDuplicateUser = async (req, res, next) => {
  //Username
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (user) {
    res.status(400).send({
      message: "Failed! Username is already in use!",
    });
    return;
  }

  // Email
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    res.status(400).send({
      message: "Failed! Email is already in use!",
    });
    return;
  }

  // Phone
  const user = await User.findOne({
    where: {
      phone: req.body.phone,
    },
  });

  if (user) {
    res.status(400).send({
      message: "Failed! Phone is already in use!",
    });
    return;
  }
  next();
};

const verifySignUp = {
  checkDuplicateUser: checkDuplicateUser,
};

module.exports = verifySignUp;
