module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updateAt: false,
    }
  );
  return User;
};
