const express = require("express");
const router = express.Router();
const User = require('../model/user');

router.get('/list', async (req, res) => {
  const isAdmin = req.session.user && req.session.user.isAdmin
  if (!isAdmin){
    return res.status(403).send({ message: 'Không đủ quyền' })
  }
  const user = await User.find({}, '-__v -password')
  res.send({user})
})
router.post('/register', async(req, res) => {
    const {username, phone, email, password , password2} = req.body;
      if(password !== password2 ) {
       return res.status(401).send({ message: 'Lỗi xác thực password'})
    }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return  res.status(400).send({ message: 'Email sai định dạng'})
     }
        if(password2 && password) {
            if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password))
            return res.status(400).send({ message: 'Password phải ít nhất 1 kí tự đặt biệt ,thường ,hoa và có số' })
    }
    try {
            if (await User.findOne({ email })) {
              return res.status(400).send({ message: 'Email đã có' })
            }      
            if (await User.findOne({ phone })) {
              return res.status(400).send({ message: 'SDT đã có' })
            }
            else{
              await User.create({ username, phone, email, password  })
              return res.send({ message: 'Chúc mừng bạn đã tạo thành công' });
             
            }
          } catch (err) {
            console.log(err)
            return res.status(400).send({ message: 'An error occured' });
          }
    
    });

    router.delete('/session', async (req, res) => {
        if (req.session && req.session.user && req.session.user.email) {
          req.session.destroy()
        return res.send({ message: 'Bạn cần phải đăng nhập' })
        } else {
          return res.status(401).send({ message: 'Bạn cần phải đăng nhập' })
        }
      })

      router.post('/login',async (req, res) => {
        const { email, password } = req.body
        const AdminPassword = '123456'
       
        if (email === 'admin') {
          if (password === AdminPassword) {
            req.session.user = { isAdmin: true, name: 'Admin', email  }
            return res.send({ message: `Logged in as Admin` })
          } else {
            return res.status(401).send({ message: 'Sai password' })
          }
        }
      
        try {
          const user = await User.findOne({ email })
          console.log(user)
          if (!user) {
            return res.status(401).send({ message: 'Username hoặc password không đúng' })
          }
          user.comparePassword(password).then((isMatch) => {
            if(isMatch) {
              const { password, _id: userId, __v, ...userData } = user._doc
              req.session.user = { userId, ...userData }
              res.send({ message: `Đăng nhập thành công!  ${email}` })
            } else {
              res.status(401).send({ message: 'Sai password' })
            }
          }).catch(err => {
            res.status(401).send({ message: 'Sai password' })
          })
        } catch (err) {
          console.log('LOGIN ERROR', err.message)
          return res.status(400).send({ message: 'An error occured' })
        }
    });


  
module.exports=router
