import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';

export default function Paginator() {

  return (
    <div class="bs-stepper">
      <div class="bs-stepper-header" role="tablist">
        {/* your steps are here */}
        <div class="step" data-target="#logins-part">
          <button type="button" class="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
            <span class="bs-stepper-circle">1</span>
            <span class="bs-stepper-label">Опросник</span>
          </button>
        </div>
        <div class="line"></div>
        <div class="step" data-target="#information-part">
          <button type="button" class="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
            <span class="bs-stepper-circle">2</span>
            <span class="bs-stepper-label">Ознакомление с программой</span>
          </button>
        </div>
        <div class="line"></div>
        <div class="step" data-target="#information-part">
          <button type="button" class="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
            <span class="bs-stepper-circle">3</span>
            <span class="bs-stepper-label">Оплата</span>
          </button>
        </div>
        <div class="line"></div>
        <div class="step" data-target="#information-part">
          <button type="button" class="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
            <span class="bs-stepper-circle">4</span>
            <span class="bs-stepper-label">Начало курса</span>
          </button>
        </div>
      </div>
      <div class="bs-stepper-content">
        {/* your steps content here */}
        <div id="logins-part" class="content" role="tabpanel" aria-labelledby="logins-part-trigger"></div>
          <div id="information-part" class="content" role="tabpanel" aria-labelledby="information-part-trigger"></div>
        </div>
      </div>
  );
}
