import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Statistic from '../components/User/statistic';
import Scheduler from '../components/User/scheduler';
import Settings from '../components/User/settings';

export default function () {
  return (
    <>
    {/* <div className="nav-scroller py-1 mb-2">
      <div classname="nav d-flex justify-content-center">
        <NavLink class="p-2 text-muted" to="/user/statistics">
          Статистика
        </NavLink>
        <NavLink class="p-2 text-muted" to="/user/scheduler">
          Календарь
        </NavLink>
        <NavLink class="p-2 text-muted" to="/user/settings">
          Настройки
        </NavLink>
      </div>
    </div> */}


    <div class="card text-center">
      <div class="card-header nav d-flex justify-content-center">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link" href="/user/statistic">Статистика</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/user/scheduler">Календарь</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/user/settings">Настройки</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <Settings />
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

      </div>
    </div>
    </>
  )
}
