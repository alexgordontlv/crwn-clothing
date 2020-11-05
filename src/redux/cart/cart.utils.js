


export const addItemToCart = (cartItems, carttItemToAdd) => {
    const existingItem = cartItems.find(item => item.id===carttItemToAdd.id)

    if (existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id ===carttItemToAdd.id 
            ?
            {...cartItem, quantity: cartItem.quantity+1}
            :
            cartItem
            )
    }else{
        return [...cartItems, {...carttItemToAdd, quantity: 1}];
    }
}

export const decreaseItemFromCart = (cartitems,cartItemToRemove) => {
    const existingCartItem = cartitems.find(
        cartItem=>cartItem.id===cartItemToRemove.id
        );

    if(existingCartItem.quantity === 1) {
        return cartitems.filter(cartItem => cartItem.id !== existingCartItem.id)
    }else {
        return cartitems.map(
            cartItem => 
            cartItem.id === cartItemToRemove.id
            ?
            {...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
            )
    }


}

