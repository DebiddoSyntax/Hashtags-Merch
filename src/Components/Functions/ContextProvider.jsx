import React, { createContext, useReducer, useState } from 'react'
import CartReducer from './CartReducer';





export const CartContext = createContext();
export const ProductprofileContext = createContext();



const ContextProvider = ({ children }) => {
    

    const [cart, dispatch] = useReducer(CartReducer, [])
    const [profile, setProfile] = useState({})


return (
        <ProductprofileContext.Provider value={{profile, setProfile}}>
            <CartContext.Provider value={{cart, dispatch}}>
            {children}
            </CartContext.Provider>
        </ProductprofileContext.Provider>

  )
}

export default ContextProvider