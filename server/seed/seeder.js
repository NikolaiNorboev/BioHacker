import '../dotenv.js';
import '../middleware/db-connect.js';
import Program from '../models/program.js';
import Course from '../models/course.js'

(async () => {


  const programList = [];
  programList.push(
    new Program({
      title: 'Для начинающих',
      description: 'Позволяет нормализовать минеральный баланс, немножко похудеть.',
      duration: 20,
      items: [
        {
          title: 'Витаминки',
          description: 'Витаминный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 3,
          },
          linkToCart: 'http://alex.shop/1.html',
        },
        {
          title: 'комплекс №1',
          description: 'Восстанавливающий комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -0.1,
          },
          linkToCart: 'http://alex.shop/2.html',
        },
        {
          title: 'комплекс №2',
          description: 'Органический комплекс для похудения',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 2,
            medicationPerDay: -1,
          },
          linkToCart: 'http://alex.shop/3.html',
        },
        {
          title: 'комплекс №3',
          description: 'Противовоспалительный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 2,
          },
          linkToCart: 'http://alex.shop/4.html',
        },
        {
          title: 'комплекс №4',
          description: 'Очистительный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 1,
            medicationPerDay: 1,
          },
          linkToCart: 'http://alex.shop/5.html',
        },
        {
          title: 'комплекс №5',
          description: 'Антигильминтный комплекс',
          brand: 'Swiss',
          dosage: {
            quantityOneTime: 3,
            medicationPerDay: 0.1,
          },
          linkToCart: 'http://alex.shop/6.html',
        },
      ],
    }),
  );
  // await Program.insertMany(programList).catch((error) => console.log(error));

  const coursesList = [];
  programList[0]._id = '5f1705e0b80c6bc5e8c72d6e';
  coursesList.push(
    new Course({
      user: '5f15cefaa01ce63af06abacb',
      program: programList[0]._id,
      date: {
        type: String,
        default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
      },
      description: 'тестовый курс для администратора сайта',
      events: await Program.generateEvents(new Date().setHours(0, 0, 0, 0), programList[0]._id),
    }),
  );

  await Course.insertMany(coursesList).catch((error) => console.log(error));
})();
