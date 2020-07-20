import React from 'react';

function Reviews() {
  return (
    <>
      <h2 className="text-center text-success">Отзывы</h2>
      <ul class="list-unstyled">
        <li class="media">
          <img
            src="/img/rsz_person1.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Максим Малышев</h5>
            Прошел программу Антистресс от Biohaker. Ребята, огромное вам
            спасибо! У ребят отличный контент, грамотно структурированная
            полезная информация. Много практики, антистресс методик. Нашел для
            себя действенные, которые использую каждый день! Помимо этого
            разобрался со своим питанием, определил продукты, негативно влияющие
            на меня. Как результат – стал меньше нервничать, больше отдыхать,
            появилась энергия на свой стартап.
          </div>
        </li>
        <li class="media my-4">
          <img
            src="/img/rsz_person2.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Светлана Чернова</h5>Я поняла, что апатия и
            упадок сил – это не норма, равно как и постоянная тяга к сладкому!
            Проходили Детокс от Biohaker всей семьей для моральной поддержки.
            Хотя поддержки от команды Biohaker было много, и программа так
            построена, что сорваться не сможешь. Хочу пройти «Витаминизацию» и
            «Антистресс». Но уже сейчас понимаю, что болеть вся семья стала
            реже, у меня вообще нет тяги к сладкому, кожа выровнялась.
          </div>
        </li>
        <li class="media">
          <img
            src="/img/rsz_person3.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Анастасия Викторовна</h5>
            Раньше пила БАДы и никаких улучшений не было. Пошла на курс
            Витаминизация, чтобы понять, что не так делаю. Энергия была на нуле,
            голова постоянно болела, раздражалась по пустякам. Благодаря курсу
            поняла, что у меня анемия и дефицит витаминов B9 и B12. Сейчас
            восполняю свои дефициты. Cпасибо огромное за курс! Я чувствую себя
            человеком, стала уделять внимание уходу за собой и своим телом.
          </div>
        </li>
      </ul>
    </>
  );
}

export default Reviews;
