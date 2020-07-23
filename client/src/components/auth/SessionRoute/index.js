import React, {useEffect} from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// import useSessionChecker from '../../hooks/auth-hook';
import { getUser } from '../../../redux/actions/action-creators';


export default function SessionRoute({children, ...rest}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    (async () => {
      // Проверяем наличие на сервере сессии для данного пользователя
      // !!! наличие сессии не гарантирует статус авторизированного пользователя
      // для авторизации необходимо получать с сервера доп. инф-ю о правах пользователя

      const response = await fetch('/api/checkSession');

      if (response.status === 200) {
        const json = await response.json();
        console.log('>>200', history, window.location.href, isAuthenticated);
        dispatch(getUser(json.username, json.flag, json.id));
        if (!isAuthenticated) {
          history.push('/stepper');
        }
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    })();
    // useSessionChecker();
  })

  console.log('>>iinn', history, window.location.href, isAuthenticated);

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}
