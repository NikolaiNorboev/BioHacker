import React from 'react';

function Reviews() {
  return (
    <>
      <h2 className="text-center text-success">Отзывы</h2>
      <ul class="list-unstyled">
        <li class="media">
          <img
            src="/img/rsz_person1.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Максим Малышев</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
        <li class="media my-4">
          <img
            src="/img/rsz_person2.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Светлана Чернова</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
        <li class="media">
          <img
            src="/img/rsz_person3.jpg"
            class="mr-3 rounded-circle"
            alt="..."
          />
          <div class="media-body">
            <h5 class="mt-0 mb-1">Анастасия Викторовна</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul>
    </>
  );
}

export default Reviews;
