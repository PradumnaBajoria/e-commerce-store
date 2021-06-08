import React from 'react'
import "./Collection.scss"
import CollectionItem from "../../components/collection-item/CollectionItem"
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/ShopSelectors"


function Collection({ collection }) {
    //console.log('yoi', collection)
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
