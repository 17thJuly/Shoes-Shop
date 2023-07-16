const express = require('express')
const router = express.Router()
const multer  = require('multer')
const path = require('path')
const uploadPath = path.join(__dirname, '../../static/user')
const upload = multer({ dest: uploadPath })
const { rename, unlink, exists } = require('fs')

const User = require('../model/user')

const removeOldImage = async function (image) {
  const filePath = uploadPath + '/' + image
   exists(filePath, (exists) => {
    if (exists)
      unlink(filePath, () => {})
  })
}

router.put('/image', upload.single('avatar'), async (req, res) => {
  const { email } = req.session.user || {}
  if(!email)
    return res.status(401).send({ message: 'Đăng nhập mới tiếp tục' })
  const user = await User.findOne({ email })
  if(!user)
    return res.status(401).send({ message: 'Đăng nhập mới tiếp tục' })
  const file = req.file
  if (!/\.jpg$/.test(file.filename)) {
    const newName = file.filename + '.jpg'
    const newPath = file.destination + '/' + newName
    rename(file.path, newPath, (err) => {
      if (!err) {
        removeOldImage(user.image)
        user.image = newName
        user.save()
        req.session.user.image = newName
        return res.send({ message: 'Uploaded Thành công ', image: newName })
      }
    })
  } else {
    removeOldImage(user.image)
    user.image = file.filename
    user.save()
    req.session.user.image = file.filename
    return res.send({ message: 'Uploaded Thành công ', image: file.filename })
  }
})


router.patch('/', async (req, res) => {
  if (!req.session.user && !req.session.user.username)
    return res.status(401).send({ message: 'Đăng nhập mới tiếp tục' })     
  const { username } = req.session.user
  const { name, Userphone, changePassword } = req.body || {}
  const user = await User.findOne({ username })
  if(changePassword) {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(changePassword))
      return res.status(400).send({ message: 'Password phải ít nhất 1 kí tự đặt biệt ,thường ,hoa và có số' })
    user.password = changePassword
  }
  user.phone = Userphone
  user.username = name
  req.session.user = Object.assign(req.session.user, { name, Userphone })
  user.save()
  console.log(user)
  res.send({ message: 'Updated thành công' } )
})

module.exports = router
