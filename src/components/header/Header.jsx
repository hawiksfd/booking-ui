import { faBed, faCalendarDays, faCar, faCity, faParachuteBox, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css';
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Header = ({ type }) => {

    const [openDate, setOpenDate] = useState(false); //untuk membuka input tanggal

    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openPerson, setOpenPerson] = useState(false); //untuk membuka opsi jumlah orang pesan

    const [person, setPerson] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handlePerson = (name, operation) => {
        setPerson((prev) => {
            return {
                ...prev, [name]: operation === "i" ? person[name] + 1 : person[name] - 1,

            };
        });
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, person } });
        navigate("/hotel", { state: { destination, dates, person } });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faParachuteBox} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airpot Taxis</span>
                    </div>
                </div>

                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">A lifetime off discount? it's Genius</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant savings of 10% or more
                            with a free HawikBookingApps account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCity} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="where are you going?"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                    {`
                            ${format(dates[0].startDate, "dd/MM/yyyy")} to 
                            ${format(dates[0].endDate, "dd/MM/yyyy")}
                            `}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenPerson(!openPerson)} className="headerSearchText">{`${person.adult} adult · ${person.children} children · ${person.room} room`}</span>
                                {openPerson &&
                                    <div div className="person">
                                        <div className="personItem">
                                            <span className="personText">Adult</span>
                                            <div className="personCounter">
                                                <button
                                                    disabled={person.adult <= 1}
                                                    className="personCounterButton"
                                                    onClick={() => handlePerson("adult", "d")} >
                                                    -
                                                </button>
                                                <span className="personCounterNumber">{person.adult}</span>
                                                <button className="personCounterButton" onClick={() => handlePerson("adult", "i")} >+</button>
                                            </div>
                                        </div>
                                        <div className="personItem">
                                            <span className="personText">Children</span>
                                            <div className="personCounter">
                                                <button
                                                    disabled={person.children <= 0}
                                                    className="personCounterButton"
                                                    onClick={() => handlePerson("children", "d")} >
                                                    -
                                                </button>
                                                <span className="personCounterNumber">{person.children}</span>
                                                <button className="personCounterButton" onClick={() => handlePerson("children", "i")} >+</button>
                                            </div>
                                        </div>
                                        <div className="personItem">
                                            <span className="personText">Room</span>
                                            <div className="personCounter">
                                                <button
                                                    disabled={person.room <= 1}
                                                    className="personCounterButton"
                                                    onClick={() => handlePerson("room", "d")} >
                                                    -
                                                </button>
                                                <span className="personCounterNumber">{person.room}</span>
                                                <button className="personCounterButton" onClick={() => handlePerson("room", "i")} >+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default Header