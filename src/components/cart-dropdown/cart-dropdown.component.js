import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
const CartDropDown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.length ?
      cartItems.map(item=> <CartItem key={item.id} item={item}/>)
      :
      <span className='empty-cart'>The cart is empty</span>
    }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }
    }>GO TO CHECKOUT</CustomButton>
  </div>
);




const mapStatetoProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStatetoProps)(CartDropDown));