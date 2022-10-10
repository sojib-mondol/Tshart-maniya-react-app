import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';



// creating context 
export const RinngContext = createContext('Matir Ring');
export const MoneyContext = createContext(555); 

const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const house = 7;
   // const ring = "Dimond Ring"

    return (
        <RinngContext.Provider value = {[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
            <div className='grandpa'>
            <h3>Grandpa</h3>
                <section className='flex'>
                    <Father house={house} ></Father>
                    <Uncle  house={house}></Uncle>
                    <Aunty  house={house}></Aunty>
                </section>
            </div>
            </MoneyContext.Provider>
        </RinngContext.Provider>
    );
};

export default Grandpa;