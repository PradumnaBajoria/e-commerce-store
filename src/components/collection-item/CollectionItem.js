import React from 'react'
import "./CollectionItem.scss"
import CustomButton from "../custom-button/CustomButton"

function CollectionItem({ id, name, imageUrl, price }) {
    return (
        <div className="collection-item">
            <div
                className='image'
                style ={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted> ADD TO CART </CustomButton>
        </div>
    )
}

export default CollectionItem
