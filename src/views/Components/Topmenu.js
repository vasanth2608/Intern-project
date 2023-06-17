import React from 'react'
import searchicon from '../../Assets/images/Search icon.png'
import bell from '../../Assets/images/Vector (4).png'
import user from '../../Assets/images/Mask Group.png'

const Topmenu = () => {
    return (
        <div className='top-menu'>
            <h5>Dashboard</h5>
            <div className='header-options'>
                <div className='search-bar'>
                    <input placeholder='Search...' />
                    <img src={searchicon} />
                </div>
                <img src={bell} className='bell-icon' />
                <img src={user} />
            </div>
        </div>
    )
}

export default Topmenu
