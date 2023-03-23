const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Category, User } = require('../models');

// GET route for the home page
router.get('/home', (req, res) => {
    try {
        console.log('HOME');
        res.render('home', {
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET route for the home page
router.get('/dashboard', (req, res) => {
  try {
      console.log('HOME');
      res.render('dashboard', {
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

