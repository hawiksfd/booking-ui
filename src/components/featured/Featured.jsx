import React from 'react'
import './featured.css'

const Featured = () => {
    return (
        <div>
            <div className="featured">
                <div className="featuredItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/region/square250/50938.webp?k=61fc24194f6d6fdff9623c2e065d21de10c9d775ff7bb91aa8bf84440397572c&o="
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitle">
                        <h1>Bali</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/square250/688180.webp?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o="
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitle">
                        <h1>Ubud</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/square250/691530.webp?k=d7c3bf00b1194d220f2bb995f4888d6062e93d3b366b6df8633484d2eac7df03&o="
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitle">
                        <h1>Canggu</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/square250/688062.webp?k=1262974dc7e10bba90ada2c6630958862b2a7fdd480f4309032b8f9df1c2bb81&o="
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitle">
                        <h1>Kuta</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured