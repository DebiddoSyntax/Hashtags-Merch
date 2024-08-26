

const CartReducer = (state, action) => {
    switch (action.type) {
       
        case "Add":
            return [...state, action.product]


        case "Remove":
            break

        case "Increase":
            break

        case "Decrease":
            break

        default: 
    } 

}

export default CartReducer