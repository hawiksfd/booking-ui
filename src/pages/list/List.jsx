import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [person, setPerson] = useState(location.state.person);

    const [openDate, setOpenDate] = useState(false);


    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h2 className="lsTitle">Search</h2>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />

                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)} >
                                {`
                            ${format(date[0].startDate, "dd/MM/yyyy")} to 
                            ${format(date[0].endDate, "dd/MM/yyyy")}
                            `}
                            </span>
                            {openDate &&
                                < DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}

                                />}
                        </div>
                        <div className="lsItem">
                            <label>Person</label>
                            <div className="lsPerson">

                                <div className="lsPersonItem">
                                    <span className="lsPersonText">
                                        Min price
                                        <small> (per night)</small>
                                    </span>

                                    <input type="number" className="lsPersonInput" />
                                </div>
                                <div className="lsPersonItem">
                                    <span className="lsPersonText">Max price
                                        <small> (per night)</small>
                                    </span>
                                    <input type="number" className="lsPersonInput" />
                                </div>
                                <div className="lsPersonItem">
                                    <span className="lsPersonText" >Adult</span>
                                    <input type="number" min={1} className="lsPersonInput" placeholder={person.adult} />
                                </div>
                                <div className="lsPersonItem">
                                    <span className="lsPersonText" >Children</span>
                                    <input type="number" min={0} className="lsPersonInput" placeholder={person.children} />
                                </div>
                                <div className="lsPersonItem">
                                    <span className="lsPersonText" >Room</span>
                                    <input type="number" min={1} className="lsPersonInput" placeholder={person.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default List