import React from 'react'
import './propertyList.css'

const PropertyList = () => {
    return (
        <div>
            <div className="pList">
                <div className="pListItem">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg"
                        alt=""
                        className="pListImg"
                    />
                    <div className="pListTitle">
                        <h1>Hotels</h1>
                        <h2>1234 hotels</h2>
                    </div>
                </div>
                <div className="pListItem">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                        alt=""
                        className="pListImg"
                    />
                    <div className="pListTitle">
                        <h1>Apartmens</h1>
                        <h2>1234 Apartmens</h2>
                    </div>
                </div>
                <div className="pListItem">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                        alt=""
                        className="pListImg"
                    />
                    <div className="pListTitle">
                        <h1>Resorts</h1>
                        <h2>1234 Resorts</h2>
                    </div>
                </div>
                <div className="pListItem">
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                        alt=""
                        className="pListImg"
                    />
                    <div className="pListTitle">
                        <h1>Villas</h1>
                        <h2>1234 Villas</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList