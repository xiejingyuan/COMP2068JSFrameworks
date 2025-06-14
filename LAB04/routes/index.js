const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/dog'); // or render a homepage
});

router.get('/dog', (req, res) => {
  res.render('dog');
});

router.get('/cat', (req, res) => {
  res.render('cat');
});

router.get('/parrot', (req, res) => {
  res.render('parrot');
});

router.get('/hamster', (req, res) => {
  res.render('hamster');
});

module.exports = router;
