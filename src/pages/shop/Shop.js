import React, { useState, useEffect } from 'react'
import ShopData from "./ShopData"
import CollectionPreview from "../../components/collection-preview/CollectionPreview"

function Shop() {

    const [collections, setCollections] = useState(ShopData)

    return (
        <div className="shap-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default Shop
