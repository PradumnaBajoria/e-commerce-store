import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/Firebase"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/CartIcon"
import CartDropDown from "../cart-dropdown/CartDropDown"
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from "../../redux/cart/CartSelectors"
import { selectCurrentUser } from "../../redux/user/UserSelectors"

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className='logo' />
            </Link>
            <div className='options' >
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                {
                    //console.log("hello i MA here", currentUser),
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> 
                    : <Link className='option' to='/signin' >SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropDown /> }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header)
