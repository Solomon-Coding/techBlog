const postsData = require('./postsData.json');
const userData = require('./userData.json');
const { User, Posts} = require('../models');
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  await Posts.bulkCreate(postsData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();






