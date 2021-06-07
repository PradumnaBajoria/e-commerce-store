import React from 'react'
import './CollectionOverview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from "../collection-preview/CollectionPreview"
import { selectCollections } from "../../redux/shop/ShopSelectors"


function CollectionOverview({ collections }) {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(CollectionOverview)
