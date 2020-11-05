import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from '../../firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {selectCartHidden, selectCurrentUser} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import './header.styles.scss';

const Header = ({ currentUser ,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    {
      currentUser ? 
      <div className='name'>{`WELCOME ${
        currentUser.displayName ? currentUser.displayName.toUpperCase(): null
      }!`}
      </div> : null
    }
    <div className='options'>

      <Link className='option' to='/shop'>
      <h3><a>SHOP</a></h3>
      </Link>
      <Link className='option' to='/shop'>
      <h3><a> CONTACT</a></h3>
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
        <h3><a>SIGN OUT</a></h3>
        </div>
      ) : (
        <Link className='option' to='/signin'>
        <h3><a>SIGN IN</a></h3>
        </Link>
      )}
      <CartIcon/>
    </div>{
      hidden ? null :  <CartDropDown/>
    }
   
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);