import React, {useState} from 'react';
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css'

function ExpenseItem(props) {
  //must be called inside the component function
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated');  
    console.log(title);
  }; 

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
