import '../dotenv.js';
import '../middleware/db-connect.js';
import Program from '../models/program.js';
import Course from '../models/course.js'

const programList = [];
programList.push(
  new Program({
    title: 'Для начинающих',
    description: 'Позволяет нормализовать минеральный баланс, немножко похудеть.',
    duration: 10,
    items: [{
      title: 'Витаминки',
      description: 'Витаминный комплекс',
      brand: 'Россия',
      dosage: {
        quantityOneTime: 1,
        medicationPerDay: 3,
      },
      linkToCart: 'http://alexey-kuznetcov.shop/1.html',
    },
    {
      title: 'комплекс №1',
      description: 'Минеральный комплекс',
      brand: 'Россия',
      dosage: {
        quantityOneTime: 2,
        medicationPerDay: 3,
      },
      linkToCart: 'http://alexey-kuznetcov.shop/2.html',
    }],
  }),
);

const coursesList = [];
coursesList.push(
  new Course({
    user: '5f10380c144fb03a7c0f757a',
    program: programList[0]._id,
    date: {
      type: String,
      default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
    },
    description: 'тестовый курс для администратора сайта',
  }),
);

Program.insertMany(programList).catch((error) => console.log(error));
Course.insertMany(coursesList).catch((error) => console.log(error));
