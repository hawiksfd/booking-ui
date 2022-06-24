import React from 'react'
import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({ item }) => {
    return (
        <div className='searchItem'>

            <img
                src={item.photos[0]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h2 className="siTitle">{item.name}</h2>
                <span className="siDistance">{item.distance}m from center {item.city}</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio apartment with air conditioning</span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so look in this great price today!</span>
            </div>

            <div className="siDetail">
                {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <Link to={`/hotel/${item._id}`}>
                        <button className='siCheckButton'>See details</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SearchItem