import React from 'react'
import './searchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square200/362812460.webp?k=42230c30cf3210e550e73e880fc30d12efaecfb1d1d8b5066724c4ba52341419&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h2 className="siTitle">Tower Street Apartments</h2>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio apartment with air conditioning</span>
                <span className="siFeatures">Entire studio · 1 Bathroom · 21m² 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so look in this great price today!</span>
            </div>

            <div className="siDetail">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <button className='siCheckButton'>See details</button>
                </div>
            </div>

        </div>
    )
}

export default SearchItem