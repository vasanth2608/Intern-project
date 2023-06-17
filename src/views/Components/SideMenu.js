import React from 'react'
import settings from "../../Assets/images/setting_icon.png"
import dashboard from "../../Assets/images/dashboard_icon.png"
import transaction from "../../Assets/images/transaction_icon.png"
import schedule from "../../Assets/images/schedule_icon.png"
import user from "../../Assets/images/user_icon.png"

const SideMenu = () => {

    const sideMenuItemsData = [
        {
            id: 1,
            name: "Dashboard",
            image: dashboard
        },
        {
            id: 2,
            name: "Transactions",
            image: transaction
        },
        {
            id: 3,
            name: "Schedules",
            image: schedule
        },
        {
            id: 4,
            name: "Users",
            image: user
        },
        {
            id: 5,
            name: "Settings",
            image: settings
        }
    ]

    return (
        <div className='side-menu-container'>
            <div className='side-menu-list'>
                <div className='side-menu-header'>
                    <h2>Board.</h2>
                </div>
                <div className='list-items'>
                    {
                        sideMenuItemsData?.map((e) => {
                            return (
                                <div key={e?.id} className='list-item'>
                                    <img src={e?.image} />
                                    <p>{e?.name}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='side-menu-bottom'>
                <p className='help'>Help</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}

export default SideMenu
