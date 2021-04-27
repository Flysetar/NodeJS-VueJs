var express = require("express");
var router = express.Router();

const {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
  userSignin,
  authenticateToken,
} = require("../controllers/userController");

router.get("/", authenticateToken, fetchUsers);

router.get("/:userId", authenticateToken, fetchUserById);

router.post("/", createUser);

router.put("/:userId", authenticateToken, updateUser);

router.delete("/:userId", authenticateToken, deleteUser);

router.post("/signin", userSignin);

module.exports = router;
