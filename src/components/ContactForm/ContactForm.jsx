import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
export default function ContactForm({onSubmitContact}) {
  const[name,setName]=useState('');
  const[number,setNumber]=useState('');
  
  const handleChange = e => {
    const {name, value}= e.target;
    switch(name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }
  
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitContact({name, number});
    reset();
  };
  const reset=()=>{
    setName('');
    setNumber('');
  }
  
 
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.lable}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
            required
          />
        </label>

        <label className={s.lable}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className={s.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }

ContactForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};


