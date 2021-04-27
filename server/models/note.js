const dbConnection = require("../config/dbConnection");

const Note = function (note) {
  this.title = note.title;
  this.description = note.firstname;
  this.user = note.user;
};

Note.create = (newUser, result) => {
  dbConnection.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("Error : " + err);
      return result(err, null);
    } else {
      console.log("User : " + res);
      return result(null, res);
    }
  });
};

Note.findById = (userId) => {
  dbConnection.query("SELECT * FROM users WHERE id=?", userId, (err, res) => {
    if (err) {
      console.log("Error : " + err);
      return result(err, null);
    } else {
      console.log("User : " + res);
      return result(null, res);
    }
  });
};

Note.fetchAll = () => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("Error : " + err);
      return result(err, null);
    } else {
      console.log("Users : " + res);
      return result(null, res);
    }
  });
};

Note.updateById = (userId, userToUpdate) => {
  dbConnection.query(
    "UPDATE users SET email=?, firstname=?, lastname=? WHERE id=?",
    userToUpdate.email,
    userToUpdate.firstname,
    userToUpdate.lastname,
    userId,
    (err, res) => {
      if (err) {
        console.log("Error : " + err);
        return result(err, null);
      } else {
        console.log("User updated : " + res);
        return result(null, res);
      }
    }
  );
};

Note.deleteById = (userId) => {
  dbConnection.query("DELETE FROM users WHERE id=?", userId, (err, res) => {
    if (err) {
      console.log("Error : " + err);
      return result(err, null);
    } else {
      console.log("User deleted : " + res);
      return result(null, res);
    }
  });
};

module.exports = User;
