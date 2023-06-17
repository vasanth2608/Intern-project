import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ChevronDown } from 'react-feather'

const LineGraph = () => {

    const series = [
        {
            name: "Guest",
            data: [430, 150, 420, 190]
        },
        {
            name: "User",
            data: [290, 480, 320, 470]
        }
    ]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: ['#9BDD7C', '#E9A0A0']
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        }
    }


    return (
        <div className='line-graph-containar'>
            <div className='header'>
                <div>
                    <h2>Activities</h2>
                    <div className='date'>
                        <p>May-June 2021</p>
                        <ChevronDown />
                    </div>
                </div>
                <div className='options'>
                    <p>Guest</p>
                    <p>Users</p>
                </div>
            </div>
            <div className='line-chart'>
                <ReactApexChart
                    series={series}
                    options={options}
                    height={260}
                    type='line'
                />
            </div>
        </div>
    )
}

export default LineGraph
