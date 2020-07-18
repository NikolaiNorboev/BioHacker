import React from 'react';

function Benefits() {
  return (
    <>
      <h2 className="text-center mb-4 text-success">
        3 готовых программы для вашего здоровья
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
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" class="btn btn-outline-success">
              Подробнее
            </a>
          </div>
        </div>
        <div class="card">
          <img src="/img/detox.jpg" class="card-img-top" alt="Детокс" />
          <div class="card-body">
            <h5 class="card-title text-center">Детокс</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" class="btn btn-outline-success">
              Подробнее
            </a>
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
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" class="btn btn-outline-success">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
