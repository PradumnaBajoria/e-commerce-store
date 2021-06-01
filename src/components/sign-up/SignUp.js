import React, { useState, useEffect } from 'react'
import "./SignUp.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, createUserProfileDocument } from "../../firebase/Firebase"

function SignUp() {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert("Password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            setDisplayName("")
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = event => {
        const { name, value } = event.target
        if(name === 'displayName'){
            setDisplayName(value)
        }else if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }else{
            setConfirmPassword(value)
        }
    }
    
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
