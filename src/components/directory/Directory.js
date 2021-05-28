import React, { useState, useEffect } from 'react'
import "./Directory.scss"
import MenuItem from "../menu-item/MenuItem"

function Directory() {

    const [sections, setSections] = useState(
        [
            {
            title: 'HATS',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
            },
            {
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
            },
            {
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
            },
            {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
            },
            {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
            }
        ]
    )

    return (
        <div className="directory-menu">
            {sections.map(({id, imageUrl, title, size}) => (
                <MenuItem 
                    title = {title}
                    imageUrl = {imageUrl} 
                    key = {id}
                    size={size}
                />
            ))}
        </div>
    )
}

export default Directory
