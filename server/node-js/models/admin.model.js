module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admins", {
    nom: {
      type: Sequelize.STRING
    },
    prenom: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return Admin;
};