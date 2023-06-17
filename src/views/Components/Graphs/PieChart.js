import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ChevronDown } from 'react-feather'

const PieChart = () => {


    const series = [44, 55, 13, 43, 22]
    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    return (
        <div className='dashboard-bottom-containar'>
            <div className='pie-chart-container'>
                <div className='header'>
                    <h2>Activities</h2>
                    <div className='date'>
                        <p>May-June 2021</p>
                        <ChevronDown />
                    </div>

                </div>
                <div>
                    <ReactApexChart
                        series={series}
                        options={options}
                        type='pie'
                        height={180}
                    />
                </div>
            </div>
            <div className='pie-chart-container'>
                <div className='header'>
                    <h2>Activities</h2>
                    <div className='date'>
                        <p>May-June 2021</p>
                        <ChevronDown />
                    </div>
                </div>
                <div>
                    <div className='note-1'>
                        <p className='heading'>Meeting with suppliers from Kuta Bali</p>
                        <p className='sub-head'>14.00-15.00</p>
                        <p className='sub-head'>at Sunset Road, Kuta, Bali </p>
                    </div>
                    <div className='note-2'>
                        <p className='heading'>Check operation at Giga Factory 1</p>
                        <p className='sub-head'>18.00-20.00</p>
                        <p className='sub-head'>at Central Jakarta </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart
