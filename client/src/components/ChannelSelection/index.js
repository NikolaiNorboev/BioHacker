import React, { useState } from 'react';

function ChannelSelection() {
  const type = {
    email: false,
    push: false,
    telegram: false,
  };

  const [telegram, setTelegram] = useState('');
  const [ready, setReady] = useState(false);
  const [channelType, setChannelType] = useState({
    email: false,
    push: false,
    telegram: false,
  });

  // checkboxes
  const inputHandler = (e) => {
    const event = e;
    const newCheckBox = {
      ...type,
      [event.target.name]: event.target.checked,
    };
    setChannelType(newCheckBox);
  };

  function telegramHandler(e) {
    setTelegram(e.target.value);
  }

  return (
    <div className="container mt-2">
      <p className="font-weight-bold">
        Выберете удобный для Вас способ получения уведомлений:
      </p>
      <div className="form-check">
        <input
          className="form-check-input"
          onChange={inputHandler}
          type="checkbox"
          name="email"
          id="email"
          checked={channelType.email}
        />
        <label className="form-check-label" for="email">
          E-mail
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          onClick={inputHandler}
          type="checkbox"
          name="push"
          id="push"
          value={telegram}
          checked={channelType.push}
        />
        <label className="form-check-label" for="push">
          Push-уведомления
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          onChange={inputHandler}
          type="checkbox"
          name="telegram"
          id="telegram"
          checked={channelType.telegram}
        />
        <label className="form-check-label" for="telegram">
          Telegram бот
        </label>
        {channelType.telegram && (
          <div className="mt-2 row w-50">
            <div className="input-group flex-nowrap col-auto">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  @
                </span>
              </div>
              <input
                onChange={telegramHandler}
                type="text"
                name="telegramuser"
                className="form-control"
                placeholder="Имя пользователя в Telegram"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChannelSelection;
