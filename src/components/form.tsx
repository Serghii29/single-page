/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Form: React.FC = React.memo(() => (
  <form className="form">
    <h3 className="form__header">registration</h3>
    <div className="form__container">
      <label>
        <p>Name</p>
        <input type="text" name="name" placeholder="Your name" />
      </label>

      <label>
        <p>Surname</p>
        <input type="text" name="surname" placeholder="Your surname" />
      </label>

      <label>
        <p>Phone number</p>
        <input type="phone" name="phone" placeholder="+38 ___ ___ __ __" />
      </label>

      <label>
        <p>Email</p>
        <input type="email" name="email" placeholder="email@email.com" />
      </label>
    </div>
  </form>
));
