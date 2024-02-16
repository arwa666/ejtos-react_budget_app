import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';

import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
const App = () => {
    const rowStyle ={
        flexWrap:'nowrap'
    }
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3' style={rowStyle}>
                      

                    <div className='col-3'>
                        {
                            <Budget/>
                        }  
                    </div>     
                    <div className='col-3'>
                        {
                                           //Remaining component
                         
                            <Remaining />
                        
                        }        
                    </div>
                    <div className='col-3'>
                        {
                                           //ExpenseTotal component
                         
                            <ExpenseTotal />
                        
                        }        
                    </div>
                    <div className='col-3'>
                        {
                                           //ExpenseTotal component
                         
                            <Currency />
                        
                        }        
                    </div>
                    </div>
                        {
                            <ExpenseList/>
                        }         

                        {
                        //   <ExpenseItem/>
                        }        

                        {
                           <AllocationForm/>
                        }        

                </div>
            
        </AppProvider>
    );
};
export default App;
