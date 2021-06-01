import React from 'react'
import "./SignInSignUp.scss"
import SignIn from "../../components/signin/SignIn"
import SignUp from "../../components/sign-up/SignUp"


function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp
