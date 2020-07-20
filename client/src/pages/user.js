import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Statistic from '../components/User/statistic';
import Scheduler from '../components/User/scheduler';
import Settings from '../components/Stepper/Settings';

export default function () {
  return (
    <>
    <div className="nav-scroller py-1 mb-2">
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
    </div>


    {/* <div class="card text-center">
      <div class="card-header nav d-flex justify-content-center">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <Link class="nav-link" to="/user/statistic">Статистика</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/scheduler">Календарь</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/user/settings">Настройки</Link>
          </li>
        </ul>
      </div> */}
      <div className="card">
         <Settings />
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

      </div>
    {/* </div> */}
    </>
  )
}
