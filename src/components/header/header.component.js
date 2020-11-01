import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from '../../firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import CartDtopDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser ,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    
    <div className='options'>
    {
      currentUser ? <div className='name'>{`WELCOME ${
        currentUser.displayName ? currentUser.displayName.toUpperCase(): null
      }!`}
      </div> : null
    }
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
      hidden ? null :  <CartDtopDown/>
    }
   
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);