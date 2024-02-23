/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import '../styles/form.styles.scss';

export const Form: React.FC = React.memo(() => {
  const [isErrorPhone, setIsErrorPhone] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (value: string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^(?:\+380)?\d{9}$/;
    return phoneRegex.test(value);
  };

  useEffect(() => {
    if (phone.length) {
      const checkError = validatePhone(phone);
      setIsErrorPhone(!checkError);
    }
  }, [phone]);

  useEffect(() => {
    if (email.length) {
      const checkError = validateEmail(email);
      setIsErrorEmail(!checkError);
    }
  }, [email]);

  return (
    <form className="form">
      <h3 className="form__header">REGISTRATION</h3>
      <div className="form__container">
        <label>
          <p className="form__label">Name</p>
          <input type="text" name="name" placeholder="Your name" className="form__input" required />
        </label>

        <label>
          <p className="form__label">Surname</p>
          <input type="text" name="surname" placeholder="Your surname" className="form__input" />
        </label>

        <label>
          <p className="form__label">Phone number</p>
          <input
            type="phone"
            name="phone"
            placeholder="+38 ___ ___ __ __"
            className={cn('form__input', {
              error: isErrorPhone,
            })}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <p
            className={cn('form__additional-information', {
              error: isErrorPhone,
            })}
          >
            *Use only numbers
          </p>
        </label>

        <label>
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            className={cn('form__input', {
              error: isErrorEmail,
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p
            className={cn('form__additional-information', {
              error: isErrorEmail,
            })}
          >
            *Use only latin letters and characters ._-@
          </p>
        </label>
      </div>

      <label className="form__checkbox-label">
        <input type="checkbox" className="form__checkbox" />
        <span className="form__custom-checkbox"> </span>
        I agree with The Terms of Use and with The
        Privacy Policy
      </label>

      <button type="submit" className="form__button-submit">
        Register me!
      </button>
    </form>
  );
});
