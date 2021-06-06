import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/Firebase"
import { connect } from "react-redux"


function Header({ currentUser }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className='logo' />
            </Link>
            <div className='options' >
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                <Link className='option' to='/shop' >
                    CONTACT
                </Link>
                {
                    console.log("hello i MA here", currentUser),
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> 
                    : <Link className='option' to='/signin' >SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header)
