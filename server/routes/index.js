import express from 'express';
import argon2 from 'argon2';
import User from '../models/user.js';

const router = express.Router();


router.get('/', (req, res) => {
  res.end();
});

router
  .route('/signup')
  .get((req, res) => {
    res.end();
  })
  .post(async (req, res) => {
    const { username, email, password, fullname } = req.body;
    // Проверка уникальности username и email вручную
    try {
      const errUnqUser = await User.isUserUnique(username);
      const errUnqEmail = await User.isEmailUnique(email);
      if (errUnqUser || errUnqEmail) {
        return res.status(401).json({ message: errUnqUser || errUnqEmail });
      };
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    };

    // username и email вручную
    try {
      await new User({
        fullname,
        username,
        email,
        password: await argon2.hash(password),
      }).save();
      req.session.user = user;
      return res.status(200).json({ username: user.username, flag: user.flag, id: user._id });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  });

router
  .route('/login')
  .get((req, res) => {
    if (req.session.user) res.end();
    res.end();
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && (await argon2.verify(user.password, password))) {
        req.session.user = user;
        req.session.user.password = undefined;
        return res.status(200).json({ username: user.username, flag: user.flag, id: user._id });
      } else if (!user) {
        res.status(401).json({ message: 'Введенный e-mail не зарегистрирован' });
      } else {
        res.status(401).json({ message: 'Введенный пароль не совпадает' });
      }
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    }
  });

router.get('/logout', async (req, res) => {
  if (req.session) {
    try {
      await req.session.destroy();
    } catch (error) {
      console.log(error.message);
      res.status(401).json({ message: error.message });
    };
    res.clearCookie('user_sid');
  }
  res.end();
});

router.get('/checkSession', (req, res) => {
  if (req.session.user)  {
    return res.json({
      username: req.session.user.username,
    });
  } else if (req.session.passport) {
    return res.json({
      username: req.session.passport.user,
    });
  };
  res.status(401).end();
});

router.post('/flag', async (req, res) => {
  const { id } = req.body;
  try {
    await User.findByIdAndUpdate(id, { flag: 1 });
    res.status(200).end();
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: e.message });
  }
});

export default router;
