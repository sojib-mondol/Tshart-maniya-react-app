import React, { useContext } from 'react';
import { RinngContext } from '../Grandpa/Grandpa';

const Special = () => {

    // contwxt calling 
    const [house, setHouse] = useContext(RinngContext);

    return (
        <div>
            <h4>Special</h4>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;