import React from 'react'
import useFetch from '../../hooks/useFetch'
import './propertyList.css'

const PropertyList = () => {

    // eslint-disable-next-line
    const { data, loading, error } = useFetch(
        "/hotel/countByType"
    );


    const images = [
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
    ];

    return (
        <div className="pList">
            {loading ? ("Loading please wait") : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img}
                                    alt=""
                                    className="pListImg"
                                />
                                <div className="pListTitle">
                                    <h1>{data[i]?.type}</h1>
                                    <p>{data[i]?.count} {data[i]?.type}s</p>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
        </div >
    );
};

export default PropertyList