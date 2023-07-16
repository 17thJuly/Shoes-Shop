const express = require('express')
const router = express.Router()
router.use('/shoes',require('../router/shoes'));
router.use('/shoes',require('../router/womanshoes'));
router.use('/users',require('../router/users'));
router.use('/profile',require('../router/profile'));
router.use('/cart',require('../router/carts'));
router.use('/bill',require('../router/bill'));
router.use('/detail',require('../router/shoesDetails'));

router.get('/auth', (req, res) => {
  if(req.session && req.session.user)
    return res.send(req.session.user)
  res.send({ message: 'Not logged in' })
})

module.exports = router
