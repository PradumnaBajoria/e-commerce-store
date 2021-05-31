import React, { useState, useEffect } from 'react'
import "./SignIn.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { signInWithGoogle } from "../../firebase/Firebase"

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    const handleChange = e => {
        const {name, value} = e.target
        {{name=='email'?setEmail(value):setPassword(value)}}
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='password'
                    required 
                />
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>

        </div>
    )
}

export default SignIn
