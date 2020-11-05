import React from 'react'
import './checkout-item.styles.scss';
import {removeItem, addItem, decreaseItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux'
const CheckOutItem = ({cartItem,clearItem,addItem,decreaseItem}) => {
    const {name,quantity, imageUrl, price} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={()=>decreaseItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div> 
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})
export default connect(null, mapDispatchToProps)(CheckOutItem);
