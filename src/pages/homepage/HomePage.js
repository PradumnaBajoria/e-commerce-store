import React from "react"
import "./HomePage.scss"
import "../../components/directory/Directory"
import "../../components/menu-item/MenuItem"
import Directory from "../../components/directory/Directory"

const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage