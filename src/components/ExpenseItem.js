
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const increaseStyle={
        borderRadius :'50%',
        backgroundColor:'#4fac5c',
        color:'#fff',
        fontSize:'18px',
        border:'none',
        minWidth:'30px',
        minHeight:'30px'
    }

    const decreaseStyle={
        borderRadius :'50%',
        backgroundColor:'#af2419',
        color:'#fff',
        fontSize:'18px',
        border:'none',
        minWidth:'30px',
        minHeight:'30px'
    }
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DEC_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td><span>{currency}</span>{props.cost}</td>
        <td><button style ={increaseStyle} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style ={decreaseStyle} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;