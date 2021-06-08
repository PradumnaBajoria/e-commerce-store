import React from 'react'
import "./CheckOut.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from "../../redux/cart/CartSelectors"
import CheckOutItem from "../../components/checkout-item/CheckOutItem"
import CartItem from '../../components/cart-item/CartItem'
import StripeButton from "../../components/stripe-button/StripeButton"


function CheckOut({ cartItems, total }) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckOutItem key={CartItem.id} cartItem={cartItem} />
                ))
            }
            <div className='total'>
                <span>TOTAL: Rs.{total}</span>
            </div>
            <div className='test-warning'>
                *Please use following card for testing Card Payements*
                <br />
                4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)
