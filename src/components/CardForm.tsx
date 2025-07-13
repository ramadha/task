import React from 'react';
import Header from './Header';
import * as styles from '../styles/CardForm.module.scss';

interface CardFormProps {
  onMenuClick: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ onMenuClick }) => (
  <div className={styles.container}>
    <Header title="Register Card Form" onMenuClick={onMenuClick} />
    <form className={styles.form}>
      <label htmlFor="cardNumber">Card Number</label>
      <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" />

      <label htmlFor="cvc">CVC</label>
      <input id="cvc" type="text" placeholder="123" />

      <label htmlFor="expiry">Expiry</label>
      <input id="expiry" type="text" placeholder="MM/YY" />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default CardForm;
