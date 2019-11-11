const router = require('express').Router();
const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0/\/", salt);

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res ) => {
  const password = req.body.password;

  const hash = bcrypt.hashSync(password, 8)

  res.status(200).json({ password, hash})
})

//  "hash": "$2a$08$S50OJITm4N7Wj9CbeQr3hOfcHyvkV6vde61fUYjMeGqP52OmNlaEa"
//   "hash": "$2a$08$WR.7IeKF27F5nRgqHGM3x.GwLHYDj0m7K4nIH0hdwaIznBu8u.MPa"
module.exports = router;
