
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()=>{
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency]= useState('');
    const currencyStyle ={
        padding: '16px',
        backgroundColor: '#93e499',
        borderRadius: '9px',
        display: 'flex',
        gap: '10px',
        color: '#fff'
    }
    const dropdownStyle={
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        color: '#fff'
    }
    const optionStyle ={
        backgroundColor: '#93e499'
    }
    const setCurrencyValue = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
        setCurrency(val);
    }
    return (
        <div style={currencyStyle}>
                <label for="currency-dropdown">Currency </label>
                <select className="custom-dropdpown" id="currency-dropdown" style={ dropdownStyle} onChange={(event) => setCurrencyValue(event.target.value)}>
                    <option defaultValue value="$" name="Dollar" style={optionStyle}>$ Dollar</option>
                    <option value="£" name="Pound" style={optionStyle}>£ Pound</option>
                    <option value="€" name="Euro" style={optionStyle}>€ Euro</option>
                    <option value="₹" name="Ruppee" style={optionStyle}>₹ Ruppee</option>
                </select>
        </div>
    )
}

export default Currency;