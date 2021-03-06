import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInANDSignOut from './pages/signin&signout/signin&signout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/cart/cart.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    this.props.currentUser ?  console.log(this.props.currentUser.id): console.log('none');
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage}/>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInANDSignOut />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);