const User = require('./User');
const Style = require('./Style');
const Recipes = require('./Recipes');
const Category = require('./Category');

// Every recipe falls within a category
Recipes.belongsTo(Category,
    {
      foreignKey: 'category_id',
      onDelete: 'CASCADE'
    }
  );
  
  // Every category can refer to many recipe's
  Category.hasMany(Recipes,
    {
      foreignKey: 'category_id'
    }
  );
  
// Every recipe falls within a particular food style
  Recipes.belongsTo(Style,
    {
      foreignKey: 'style_id',
      onDelete: 'CASCADE'
    }
  );

// Every style can refer to many recipe's
Style.hasMany(Recipes,
    {
      foreignKey: 'style_id'
    }
  );

  // Every user can refer to many recipe's
User.hasMany(Recipes,
  {
    foreignKey: 'user_id'
  }
);
  
// Every recipe falls within a particular food style
Recipes.belongsTo(User,
  {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  }
);

module.exports = {
    User,
    Recipes,
    Category,
    Style,
  };
