const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Posts, User } = require('../models');

// GET route for the home page
router.get('/', async (req, res) => {
    try {
      const postsData = await Posts.findAll({
        include: [
          {
            model: User,
          },
        ]
      })
      const postsList = postsData.map((posts) =>
      posts.get({plain: true})
      );
      // console.log(postsList)
        console.log('HOME');
        res.render('home', {
          postsList,
          loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET route for the dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  try {    
    const postsData = await Posts.findAll({
      include: [
        {
          model: User,
        },
      ],
      where: {
        id: req.session.user_id
      }
    })
    console.log(req.session)
    const postsList = postsData.map((posts) =>
    posts.get({plain: true})
    );
      console.log('DASHBOARD');
      res.render('dashboard', {
        postsList,
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

