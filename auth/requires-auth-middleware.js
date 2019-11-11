const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js')

module.exports = (req, res, next) => {
    let { username, password } = req.body;
    if(username && password){
        Users.findBy({ username, password })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
        next();
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
    } else {
        res.status(400).json({ message: 'please provide credentials'})
    }


    Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
        next();
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}