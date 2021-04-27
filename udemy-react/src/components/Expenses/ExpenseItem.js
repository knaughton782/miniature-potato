import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);
    const clickHander = () => {
        setTitle('Toilet Paper');
    };

    return (
        <Card className='expense-item'>
            {/* pass in props.date here so its available in the ExpenseDate component */}
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHander}>Change Title</button>
        </Card>

    );
}

export default ExpenseItem;
