import React from 'react';
import './Cart.css'


const Cart = ({cart, handleRemoveItem}) => {
    

    // this is for conditional renderring 
    let message;
    if(cart.length === 0){
        message = <p>Plese buy atleast one items !!!</p>
    }
    else if(cart.length === 1) {
        message = <div>
            <h3>Amar ekta nao</h3>
            <p>Tomer nijer jonno ekta</p>
            <p><small>Amar jonno ekta nao, Please Please Please...</small></p>
        </div>
    }
    else {
        message = <p>Thans fot buying!</p>
    }
    


    
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>

                </p>)
            }
            {
                message
            } 
            {cart.length === 3 ? <p>Tin jon ke gift diba? ;-&#41;</p> : <p>kino kino </p>}
            <p>and operator</p>
            {cart.length === 2 && <h2>Double items</h2> }
            <p>Or operator</p>
            {cart.length === 4 || <p>Charta item na</p> }
        </div>
    );
};

export default Cart;



/* 
    Conditional Renderirng 
    1. use element and if-else 
    2. ternary operator
    3. use of && operator (if condition is true I wnat to display something)
    4. || operator (if condition is false, I wnat to disply something)
*/