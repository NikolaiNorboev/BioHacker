import React from 'react';
import './SimpleTest.module.css'

function SimpleTest() {
  return (
    <div className="component">
      <div className="col-md-12 offset-md-3">
      <p>Ответьте пожалуста на вопросы чтобы выбрать пограммы для Вас</p>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Ваш пол:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Мужской
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Женский
          </label>
        </div>
        <br/>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Ваш возраст:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> моложе 20
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> от 20 до 35
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> от 35 до 65
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> старше 65
          </label>
        </div>
        <br/>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Ваш образ жизни:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Активный
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Мало активный
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Сидячий
          </label>
        </div>
        <br/>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Ваш образ питания:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Всегда правильно питаюсь
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Стараюсь правильно питаться
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Питаюсь без ограничений
          </label>
        </div>
        <br/>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Занимаетесь ли Вы спортом:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Постоянно
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Иногда/Редко
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Никогда
          </label>
        </div>
        <br/>
        <div className="btn-group-vertical" role="group" data-toggle="buttons">
          <p>Какое количество денег Вы тратите на здоровье:</p>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Больше 50% от бюджета
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> от 50% до 20% от бюджета
          </label>
          <label class="btn btn btn-outline-success">
            <input type="radio" /> Меньше 20% от бюджета
          </label>
        </div>
      </div>
    </div>
  )
};

export default SimpleTest;
