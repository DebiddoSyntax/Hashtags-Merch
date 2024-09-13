import React, { useContext } from 'react';
import { CartContext, ProductprofileContext } from '../Components/Functions/ContextProvider';
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";
import { totalCart, totalCartAmount } from '../Components/Functions/CartReducer';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';



const CartProduct = ({ product }) => {

  const {setProfile} = useContext(ProductprofileContext);
  const { cart, dispatch } = useContext(CartContext); 

  const Increase = (id, size) => {
    const Index = cart.findIndex(p => p.id === id && p.size === size);
    if (cart[Index].quantity < 5) {
      dispatch({ type: "Increase", id: id, size: size }); 
    }
  };
  
  const Decrease = (id, size) => {
    const Index = cart.findIndex(p => p.id === id && p.size === size);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id: id, size: size }); 
    }
  };
  


  const Remove = (id, size) => {
    const productToRemove = cart.find(p => p.id === id && p.size === size);
    if (productToRemove) {
      dispatch({ type: "Remove", id: id, size: size });
    }
  };
  

  
  return (
    <div className='mx-5 md:mx-10 my-5 grid grid-cols-4 gap-3 items-center mt-5'>

        <div className='flex flex-col lg:flex-row col-span-2 items-start w-[95%] h-auto'>
        <Link to="/productpage" onClick={()=>{setProfile(product)}}>
          <div className='bg-[#f2f2f2] p-4 mr-5'>
            <div className='h-20 lg:h-24 w-20'>
              <img className='h-full w-full object-contain' src={product.image} alt={product.title} />
            </div>
          </div>
          </Link>

          <div>
            <p className='m-1 w-full text-sm font-medium'>{product.title}</p>
            <p className='m-1 text-xs font-normal'>{product.category}</p>
            <p className='m-1 text-xs font-normal'>Size: <b>{product.size}</b></p>
            <button className='my-2 mx-1 px-3 py-[3px] bg-red-700 text-white text-xs' onClick={() => Remove(product.id, product.size)}>Remove</button>
          </div>
        </div>

        <div className='flex items-center mt-20 lg:mt-1'>
          <div className='p-2 text-2xl cursor-pointer' onClick={()=> Decrease(product.id, product.size)}><HiMiniMinusSmall /></div>
          <span className='p-3 bg-[#f2f2f2]'>{product.quantity}</span>
          <div className=' p-2 text-2xl cursor-pointer' onClick={()=> Increase(product.id, product.size)}><HiMiniPlusSmall /></div>
        </div>

        <div className='ml-10 mt-20 lg:mt-1'>
          <p>{product.price}</p>
        </div>

       
      </div> 


  );
};

const Cart = () => {
  
  const { cart } = useContext(CartContext);


  return (
    <div className='py-20'>
          <div className='border-b-2 py-5 px-5 md:px-10 text-lg md:text-2xl font-semibold'>
            <h2>Shopping Bag</h2>
          </div>

<div className='grid grid-cols-1 md:grid-cols-2'>
   
    <div>
          {cart.length === 0? <div className='pt-10 mx-5 md:mx-10 text-center'>Your cart is empty</div> : 
          <div className='text-sm md:text-lg font-semibold grid grid-cols-4 px-5 md:px-10 py-5 text-gray-500'>
            <h3 className='text-sm md:text-lg font-semibold col-span-2'>PRODUCT DETAILS</h3>
            <h3 className='text-sm md:text-lg font-semibold px-4 md:px-2'>QUANTITY</h3>
            <h3 className='text-sm md:text-lg font-semibold ml-10'>PRICE</h3>
          </div>
          }

          <div>
            {cart.map((p, id) => (
              <CartProduct 
                key={id}
                product={p}/>
            ))}
          </div>
    </div>

    <div>
          {cart.length === 0? <div className='hidden'></div> : 


            <div className='px-5 md:px-10'>
              
              <div className='p-6 bg-[#f2f2f2]'>

                <h2 className='text-lg py-2'>Summary</h2>
                  <p className='font-semibold my-2 border-t-2 border-gray-300 text-sm pt-4'>Total</p>
                <div className='flex justify-between border-b-2 border-gray-300 pb-4'>
                  <div className='flex flex-col justify-between text-sm'>
                    <p className='my-2'>Quantity</p>
                    <p className='my-2'>Amount</p>
                  </div>

                  <div className='flex flex-col justify-between text-sm items-end'>
                    <p className='my-2'>{totalCart(cart)}</p>
                    <p className='my-2'>{totalCartAmount(cart)}</p>
                  </div>
                </div>

                <form action="" className='pt-10'>
                    <div className="mb-5 flex flex-col items-start text-left w-full h-full">
                      <label htmlFor="address" className="text-sm font-semibold text-gray-700 mb-4 mr-4">Your Delivery Address</label>
                      <div className='w-[100%] h-[140px] px-2 py-1 rounded-md focus:outline-none bg-white'>
                        <textarea type="text" id="address" name="address" placeholder='Enter your address' className="w-full h-full resize-none p-3 focus:outline-none"></textarea>
                      </div>
                    </div>


                    <div className="mb-5 flex flex-col items-start text-left w-full">
                      <label htmlFor="number" className="text-sm font-medium text-gray-700 mb-4 mr-4">Phone Number</label>
                      <input type="number" id="number" name="number" placeholder='Enter phone number' className=" w-[100%] p-3 bg-white rounded-md focus:outline-none">
                      </input>
                    </div>

                    <Button type='submit' className=" mt-5 md:mt-10 text-sm items-center h-full w-full place-items-center bg-blue-700 text-white hover:bg-blue-800">
                      Checkout
                    </Button>

                </form>

              </div>


            </div>
        
          }

    </div>
</div>
          
    

    </div>
  );
};

export default Cart;
