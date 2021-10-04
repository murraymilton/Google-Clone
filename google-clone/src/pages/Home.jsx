import React from 'react'
import { Link } from 'react-router-dom'
import AppIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core'
import './Home.css'
function Home() {
    return (
        <div className="home">
           <div className="home__header">
                <div className="home__headerLeft">
                 <Link to="/about">About</Link>
                 <Link to="/store">Store</Link>

                </div>
                <div className="home__headerRight">
                 <Link to="/gmail">Gmail</Link>
                 <Link to="/images">Images</Link>
                 <AppIcon />
                 <Avatar />
                 {/* <Link to="/icon">About</Link>
                 <Link to="/avatar">About</Link> */}
                    
                    {/*Gmail */}
                    {/*Images */}
                    {/*Icon */}
                    {/*Avatar */}

                </div>
           </div>
           <div className="home__body">

           </div>
        </div>
    )
}

export default Home
