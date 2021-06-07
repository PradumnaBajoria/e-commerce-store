import React, { useState, useEffect } from 'react'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'

function Shop({collections}) {
    return (
        <div className="shap-page">
            <CollectionOverview />
        </div>
    )
}

export default Shop
