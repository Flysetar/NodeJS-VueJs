const dbConnection = require("../config/dbConnection");
const jwt = require("jsonwebtoken");
const User = dbConnection.users;
const dotenv = require("dotenv").config();

exports.fetchUsers = (_, res) => {
  User.findAll().then((data) => {
    if (data.err) {
      res.status(500).send({
        message: data.err.message || "Error on fetching users",
      });
    } else {
      res.json(data);
    }
  });
};

exports.fetchUserById = (req, res) => {
  User.findByPk(req.params.userId).then((data) => {
    if (data.err) {
      res.status(404).send({
        message:
          data.err.message || `User not found with id ${req.params.userId}`,
      });
    } else {
      res.json(data);
    }
  });
};

exports.createUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "User can't be create, Content needed",
    });
    return;
  }
  const userToCreate = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
  };

  User.create(userToCreate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: data.err.message || "Error on create new user",
      });
    });
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "User can't be update, Content needed",
    });
    return;
  }
  User.update(req.body, { where: { id: req.params.userId } })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "User was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update User`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error on update user",
      });
    });
};

exports.deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: `User ${req.params.userId} deleted`,
        });
      } else {
        res.send({
          message: `Cannot delete user with id ${req.params.userId}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error on delete user id ${req.params.userId}`,
      });
    });
};

exports.userSignin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.send({
      message: "Missing content (Email or password)",
    });
    return;
  }

  const user = await User.findOne({ where: { email: req.body.email } });

  if (user.password === req.password) {
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
    res.json({ jwt: token });
  } else {
    res.json({
      message: "Wrong password or email",
    });
  }
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;

    next();
  });
};
