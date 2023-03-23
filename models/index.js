const User = require('./User');
const Post = require('./Post');

  // Every category can refer to many recipe's
  User.hasMany(Post,
    {
      foreignKey: 'post_id'
    }
  );

  // Every recipe falls within a particular food style
Post.belongsTo(User,
  {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  }
);

module.exports = {
    User,
    Post,
  };
