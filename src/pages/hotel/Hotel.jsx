import React, { useState } from 'react'
import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362812460.jpg?k=acc2faa4afa9edc5149f08c452bcd5a5bdbc7e61d5bcb2bc31bb8927168845f8&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/364912282.jpg?k=5c530a7cc8cd7651fdbf9edff633a0e1a810223613a15ce66bcd2dc53dee5ec6&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362812465.jpg?k=bb29a0f6a81cd923214949c1f3cd4244e67f6f7a8bd40276e89784d8506b14cf&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362812461.jpg?k=e616024c4eb7cefd8cfb00c60232d9386f88c847de93b4826d1b2d4ff1c98878&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362812462.jpg?k=4ced58488eab11d0b254be1bceef2c4b2b39abce1370e7c784ae8537723e975a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362812466.jpg?k=37223b5b21692420096c20b3bffbba84535a093872d3cbd0d8280bf3fe39211e&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpenSlider(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {openSlider && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpenSlider(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src}
                            alt=""
                            className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />

                </div>}
                <div className="hotelWrapper">
                    <h2 className="hotelTitle">Wana Bucu Villas by Pramana Villas</h2>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Jalan Bisma, 80571 Ubud, Indonesia</span>
                    </div>

                    <span className="hotelDistance">Excellent Location - 700m from center</span>
                    <span className="hotelPriceHightLight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetail">
                        <div className="hotelDetailText">
                            <h3 className="hoteldtTitle">
                                Stay in the heart of Ubud
                            </h3>
                            <p className='hoteldtDesc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at convallis ante. Praesent molestie risus lorem, vel fermentum justo interdum sed. Sed vel scelerisque mi. Suspendisse in lectus tincidunt tellus blandit egestas eu sit amet urna. Curabitur tristique sagittis nisi, id elementum enim eleifend quis. Proin pellentesque fringilla leo sed tincidunt. Ut ac iaculis tortor, euismod accumsan est. Suspendisse vel urna pulvinar, ultrices erat in, dictum neque. Aenean ac hendrerit elit, sit amet pretium eros. Suspendisse et arcu scelerisque, tempor dui sed, malesuada est. Aenean eget ex non nunc ultrices mattis. Cras malesuada enim in arcu fermentum, nec convallis leo convallis. Nullam tincidunt erat id purus aliquam, non luctus sem convallis. Sed in eleifend sem.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h3>Perfect for a 9-night stay!</h3>
                            <span>
                                Located in the real heart of Ubud, this property has an
                                excellent location score of 8.9!
                            </span>
                            <h4>
                                <b>$945</b> (9 nights)
                            </h4>
                            <button className='bookNow'>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>

        </div>
    )
}

export default Hotel