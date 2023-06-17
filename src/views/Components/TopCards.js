import React from 'react'
import transactions from "../../Assets/images/Vector (1).png"
import likes from "../../Assets/images/Vector (2).png"
import users from "../../Assets/images/Vector (3).png"
import revenue from "../../Assets/images/Vector.png"

const TopCards = () => {

    const cardItemsList = [
        {
            id: 1,
            image: revenue,
            bgColor: "#DDEFE0",
            name: "Total Revenues",
            number: "$2,129,430"
        },
        {
            id: 2,
            image: transactions,
            bgColor: "#F4ECDD",
            name: "Total Transactions",
            number: "1,520"
        },
        {
            id: 3,
            image: likes,
            bgColor: "#EFDADA",
            name: "Total Likes",
            number: "9,721"
        },
        {
            id: 4,
            image: users,
            bgColor: "#DEE0EF",
            name: "Total Users",
            number: "892"
        }
    ]


    return (
        <div className='top-cards'>
            {
                cardItemsList?.map((e) => {
                    return (
                        <div key={e?.id} className='card' style={{ backgroundColor: e?.bgColor }}>
                            <div className='card-icon'>
                                <img src={e?.image} />
                            </div>
                            <div className='card-name'>
                                <p>{e?.name}</p>
                            </div>
                            <div className='card-number'>
                                <h3>{e?.number}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TopCards
