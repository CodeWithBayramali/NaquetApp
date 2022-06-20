const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = router => {


  // USER REGISTER
  router.post('/register', async (req, res) => {
    const data = req.body;

    const userExists = await User.findOne({ email: data.email });
    const username = await User.findOne({ userName: data.userName });

    if (data.password !== data.rePassword) {
      return res.json({ message: 'Parolalar uyuşmuyor' });
    }

    if (username || userExists) return res.json({ message: 'Bu hesap kullanılmakta' });

    //hash password
    const hashPassword = await bcrypt.hash(data.password, 12);

    //create user
    const user = await User.create({ ...data, password: hashPassword });

    if (!user) return res.json({ message: 'Birşeyler ters gitti lütfen tekrar deneyiniz' });

    res.json({
      message: 'Kayıt Başarılı',
    });
  });




  //USER LOGIN
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    //check user account
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: 'User not found' });

    // password correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.json({ message: 'Hatalı Giriş' });

    //send token to user
    const accesToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.userName,
        firstName: user.FirstName,
        city: user.city,
      },
      process.env.SECRET_KEY,
      { expiresIn: '365d' }
    );

    res.json({
      accesToken,
    });
  });



  //GET ALL USER INFO
  router.get('/getalluserinfo/:id', async (req, res) => {
      const {id} = req.params
      const user = await User.findOne({id})
      res.json(user)
  });
};
