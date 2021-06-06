import React from 'react'
import "./CartDropDown.scss"
import CustomButton from "../custom-button/CustomButton"

function CartDropDown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown
