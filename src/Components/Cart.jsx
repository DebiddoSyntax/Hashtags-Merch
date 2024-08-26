import React, { useContext } from 'react';
import { CartContext } from './Functions/ContextProvider';

const CartProduct = ({ product }) => {
  return (
    <div className='px-5'>
      <div className=''>
        <img src={product.image} alt={product.title} />
      </div>
      <h4>{product.title}</h4>
    </div>
  );
};

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <div className='pt-20'>Your cart is empty</div>;
  }

    const handleclick = () => {
        console.log(cart)
    }

  return (
    <div className='pt-20'>
      <div>
        {cart.map((p, id) => (
          <CartProduct 
            key={id}
            product={p}
          />
        ))}
      </div>
      <button className='bg-black text-white px-5' onClick={handleclick}>Hello cart</button>
    </div>
  );
};

export default Cart;
