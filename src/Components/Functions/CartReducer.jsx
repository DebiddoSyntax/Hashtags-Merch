export const totalCart = (cart) => {
    return cart.reduce((totalProducts, product)=>{
        return totalProducts + product.quantity
    }, 0)
}


export const totalCartAmount = (cart) => {
    return cart.reduce((totalAmount, product)=>{
        return totalAmount + (product.price * product.quantity)
    }, 0)
}

const CartReducer = (state, action) => {
    switch (action.type) {
       
        case "Add":
            // Check if product with same id and size already exists
            const productExists = state.find(product => product.id === action.product.id && product.size === action.product.size);

            if (productExists) {
                return state; // If it exists, return the current state (no duplicates)
            } else {
                return [...state, action.product]; // Add the new product if it's not in the cart
            }


        case "Remove":
             return state.filter(product => !(product.id === action.id && product.size === action.size));


        case "Increase":
            // [...state.quantity] = 0;
            const addQuantity = 1;
            const IndexI = state.findIndex(p=> p.id === action.id && p.size === action.size)
            state[IndexI].quantity = state[IndexI].quantity + addQuantity
            return [...state];

        case "Decrease":
            const IndexD = state.findIndex(p=> p.id === action.id && p.size === action.size)
            state[IndexD].quantity = state[IndexD].quantity - 1
            return [...state];

        default: 
            return state;
        
    } 

}

export default CartReducer