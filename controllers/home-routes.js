const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Recipes, Category, Style, User } = require('../models');

// GET route for the home page
router.get('/', withAuth, async (req, res) => {
    try {
        // const recipeData = await Recipes.findAll()
        // const recipeList = recipeData.map((recipes) =>
        // recipes.get({plain: true})
        // );
        // console.log('HOME');
        res.render('home', {
            // recipeList,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET route for the recipes page (displays all recipes)
router.get('/recipes', withAuth, async (req, res) => {
  try {
      const recipeData = await Recipes.findAll()
      const recipeList = recipeData.map((recipes) =>
      recipes.get({plain: true})
      );
      // console.log('RECIPES');
      res.render('recipes', {
          recipeList,
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// GET route for the recipe page (displays one recipe)
router.get('/recipes/:id', withAuth, async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
        {
          model: Style,
        },
        {
          model: User,
        },
      ]
    });

    if (!dbRecipeData) {
      // If no recipe data is found, redirect to a 404 page or return an error message
      return res.status(404).send('Recipe not found');
    }

    const individualRecipe = dbRecipeData.get({ plain: true });
    res.render('viewRecipe', {
      individualRecipe,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for the addRecipe page
router.get('/addRecipe', withAuth, async (req, res) => {
  try {
      // console.log('ADD RECIPE');
      res.render('addRecipe', {
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// GET route for the editRecipe page
// router.get('/Recipe/edit/id:', withAuth, async (req, res) => {
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
        {
          model: Style,
        },
        {
          model: User,
        },
      ]
    });

    if (!dbRecipeData) {
      // If no recipe data is found, redirect to a 404 page or return an error message
      return res.status(404).send('Recipe not found');
    }
    const editRecipe = dbRecipeData.get({ plain: true });
    // console.log(editRecipe)
    res.render('editRecipe', {
      editRecipe,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete recipe route

// router.delete('/recipes/:id', withAuth, async (req, res) => {
//   try {
//     const recipe = await Recipes.findByPk(req.params.id);

//     if (!recipe) {
//       return res.status(404).send('Recipe not found');
//     }

//     if (recipe.userId !== req.session.userId) {
//       return res.status(403).send('You are not authorized to delete this recipe');
//     }

//     await recipe.destroy();

//     res.status(200).send('Recipe deleted successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

