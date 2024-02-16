
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , remaining,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const spent = budget - remaining;
    const handleBudgetChange = (event) => {
 
            if(event.target.value <= 20000){
               
                if(event.target.value > spent){
                    setNewBudget(event.target.value);
                }
                else{
                    alert("you can't have a budget that is already less than what is spent")
                }
            }else{
                alert('the budget can not exceed 20000')
            }
            
            
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: <span>{currency}</span>{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>
</div>
    );
};
export default Budget;