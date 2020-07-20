import React from 'react';

function Benefits() {
  return (
    <>
      <h2 className="text-center mb-4 text-success">
        Программы для вашего здоровья
      </h2>
      <div class="card-deck">
        <div class="card">
          <img
            src="./img/nostress-mini.jpg"
            class="card-img-top"
            alt="Антистресс"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Антистресс</h5>
            <p class="card-text">
              Снижение стресса через систему питания, прием витаминов и комплекс
              упражнений
              <div>
                <i> Длительность курса 1 месяц </i>
              </div>
            </p>
            {/* <a href="#" class="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
        <div class="card">
          <img src="/img/detox.jpg" class="card-img-top" alt="Детокс" />
          <div class="card-body">
            <h5 class="card-title text-center">Детокс</h5>
            <p class="card-text">Очищение организма от токсинов</p>
            <div>
              <i>Длительность курса 3 недели</i>
            </div>
            {/* <a href="#" class="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
        <div class="card">
          <img
            src="/img/vitamins2.jpg"
            class="card-img-top"
            alt="Витаминизация"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Витаминизация</h5>
            <p class="card-text">
              Наполнение организма необходимыми витаминами и минералами
            </p>
            <div>
              <i>Длительность курса 3 недели</i>
            </div>
            {/* <a href="#" class="btn btn-outline-success">
              Подробнее
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
