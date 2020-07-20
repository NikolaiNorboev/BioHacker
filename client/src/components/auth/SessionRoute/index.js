import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// import useSessionChecker from '../../hooks/auth-hook';
import { getUser } from '../../../redux/actions/action-creators';


export default function SessionRoute({children, ...rest}) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // Проверяем наличие на сервере сессии для данного пользователя
      // !!! наличие сессии не гарантирует статус авторизированного пользователя
      // для авторизации необходимо получать с сервера доп. инф-ю о правах пользователя

      const response = await fetch('/api/checkSession');

      if (response.status === 200) {
        const json = await response.json();
        dispatch(getUser(json.username));
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    })();
    // useSessionChecker();
  })
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route {...rest}>
      {children}
      {/* {isAuthenticated && <Redirect to="/login" />} */}
    </Route>
  );
}
