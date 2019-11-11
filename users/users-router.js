const router = require('express').Router();

const Users = require('./users-model.js');
const requireAuth = require('../auth/requires-auth-middleware')


router.get('/', requireAuth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
