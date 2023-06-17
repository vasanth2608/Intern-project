import React from 'react'
import SideMenu from '../Components/SideMenu'
import Topmenu from '../Components/Topmenu'
import TopCards from '../Components/TopCards'
import LineGraph from '../Components/Graphs/LineGraph'
import PieChart from '../Components/Graphs/PieChart'

const Dashboard = () => {
    return (
        <div className='dash-board-container'>
            <SideMenu />
            <div className='dash-board-main'>
                <Topmenu />
                <TopCards />
                <LineGraph />
                <div className='dashboard-bottom'>
                    <PieChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
