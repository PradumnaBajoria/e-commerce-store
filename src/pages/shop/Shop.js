import React, { useState, useEffect } from 'react'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import { Route } from "react-router-dom"
import Collection from '../collection/Collection'


function Shop({ match }) {
    //console.log('yoo',match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}

export default Shop
