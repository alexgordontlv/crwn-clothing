import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component'
import './signin&signot.styles.scss';


const SignInANDSignOut = () =>(
    <div className="sign-in-and-sign-out">
    <SignIn/>
    <SignUp/>
    </div>
)


export default SignInANDSignOut;