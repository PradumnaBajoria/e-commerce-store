import React from 'react'
import "./CartIcon.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/CartAction"
import { selectCartItemsCount } from "../../redux/cart/CartSelectors"
import { createStructuredSelector } from 'reselect'


function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
