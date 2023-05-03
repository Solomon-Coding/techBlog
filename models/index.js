const User = require('./User');
const Posts = require('./Posts');

  // Every category can refer to many recipe's
  User.hasMany(Posts,
    {
      foreignKey: 'user_id'
    }
  );

  // Every recipe falls within a particular food style
Posts.belongsTo(User,
  {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  }
);

module.exports = {
    User,
    Posts,
  };
