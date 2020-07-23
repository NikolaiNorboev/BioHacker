import React from 'react';

export default function() {

  return (
  <>
    <div className="card-header">
            Укажите номер телефона:
    </div>
    <div className="card-body">
      <div class="col-4">
        <label class="sr-only" for="inlineFormInputGroup">Телефон</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">+7</div>
          </div>
           <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="999 1234567 "/>
          </div>
        {/* <p className="card-text">
           <small className="text-muted">
             Введите ваш номер телефона в формате: +7 9991234567 
           </small>
        </p> */}
      </div>
              
    </div>

  </>
  )
}

