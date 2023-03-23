const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Category, User } = require('../models');

// GET route for the home page
router.get('/', async (req, res) => {
    try {
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

