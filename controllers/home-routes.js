const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Posts, User } = require('../models');

// GET route for the home page
router.get('/', (req, res) => {
    try {
        console.log('HOME');
        res.render('home', {
          loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET route for the home page
router.get('/dashboard', withAuth, (req, res) => {
  try {
      console.log('HOME');
      res.render('dashboard', {
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

