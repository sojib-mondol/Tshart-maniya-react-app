import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'


const Home = () => {

    const tshirts = useLoaderData();


    // 2nd step for add procuct in cart
    const [cart, setCart] = useState([]); // now this cart will go to the Cart component 



    // 1sr strp for add produst in cart
    const handleAddToCart = tshirt => {
        // if I wnat to chect there is any product alredi added 
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            alert('t-shirt already added'); //Alert message if alredi exist  
        } 
        else{
            const newCart = [...cart, tshirt];  // ...cart for if a element alredy exists & tshirt will add.
            setCart(newCart);
            //alert('successfuly added');
        }
    }



    // this is for remove items 
    const handleRemoveItem = tshirt => {
        // its a arry of object tht's why we neet to filter if we want to remove a spacific items 
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
           <div className='t-shirt-container'> 
            {
                tshirts.map(tshirt => <TShirt
                    key={tshirt._id} 
                    tshirt = {tshirt}
                    handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
           </div>
           <div className='cart-container'>
                <Cart 
                    cart={cart}
                    handleRemoveItem ={handleRemoveItem}
                ></Cart>
           </div>
        </div>
    );
};

export default Home;