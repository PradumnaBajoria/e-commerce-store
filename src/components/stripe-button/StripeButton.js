import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from "./crown.jpeg"


function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51J02zpSDS0J1UkAugXskYBTNL1ScVbHvj52uIqB30lfyhFNVOOs5CMU4g8kZSknhVJDosYBVV0fA0NYwY9mEoiwn00NLNmOajY'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'E-Commerce Store'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is Rs. ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            currency = 'INR'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeButton
