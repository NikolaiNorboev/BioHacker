import express from 'express';
import Course from '../models/course.js';


const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    let course;
    try {
      course = await Course.findOne({user: req.session.user._id});
      // если курс существует, возвращаем по нему информацию
      // console.log(course);
      if (course) return res.json({course});
      // если курс не начат - сообщаем об этом
      res.status(401).json({message: 'у Вас нет активных курсов'});
    }
    catch(error) {
      console.log(error.message);
      return res.status(401).json({message: error.message})
    };
  })
  .post(async (req, res) => {
    const course = new Course({
      user: req.session.user,
      program: '',
      startDate: '',
      description: '',
    });
    try {
      await course.save();
      res.end();
    }
    catch(error) {
      console.log(error.message);
      res.status(401).json({message: error.message})
    };
  })
  .patch(async (req, res) => {
    // фиксируем дисциплину курса (статистика приема лекарств)
    let course;
    try {
      course = await Course.findOne({_id: req.session.user._id});
      // если курс существует, вносим изменения
      if (course) return res.json({course});
      // если курса не существует - сообщаем об этом
      res.status(401).json({message: 'у Вас нет активных курсов'});
    }
    catch(error) {
      console.log(error.message);
      return res.status(401).json({message: error.message})
    };
  })
  .delete(async (req, res) => {
    // удаление курса
    let course;
    try {
      course = await Course.findOne({_id: req.session.user._id});
      // если курс существует - удаляем его
      if (course) {
        await course.remove();
        return res.end();
      }
      // если курса не существует сообщаем об этом
      res.status(401).json({message: 'у Вас нет активных курсов'});
    }
    catch(error) {
      console.log(error.message);
      return res.status(401).json({message: error.message})
    };
  });


export default router;
