const router = require('express').Router();
require('dotenv').config();

// route to create/add a recipes using async/await
router.post('/', async (req, res) => {
  try { 
    const recipesData = await Posts.create({
    name: req.body.name,
    author: req.body.author,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    category_id: req.body.category_id,
    style_id: req.body.style_id,
  });
  // if the recipes is successfully created, the new response will be returned as json
  res.status(200).json(recipesData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
