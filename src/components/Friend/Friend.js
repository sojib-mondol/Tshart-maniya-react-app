import React, { useContext } from 'react';
import { RinngContext } from '../Grandpa/Grandpa';

const Friend = () => {

    const [house, setHouse] = useContext(RinngContext);
    return (
        <div>
            <h4>Friend</h4>
            <p><small>Ring: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;