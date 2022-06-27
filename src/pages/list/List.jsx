import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';


const List = () => {
    const location = useLocation();
    // eslint-disable-next-line
    const [destination, setDestination] = useState(location.state.destination);
    // eslint-disable-next-line
    const [dates, setDates] = useState(location.state.dates);
    // eslint-disable-next-line
    const [person, setPerson] = useState(location.state.person);
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    // eslint-disable-next-line
    const { data, loading, error, reFetch } = useFetch(
        `/hotel?city=${destination}&min=${min - 1 || 0}&max=${max || 9999}`
    )

    const handleClick = () => {
        reFetch()
    }


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
                            ${format(dates[0].startDate, "dd/MM/yyyy")} to 
                            ${format(dates[0].endDate, "dd/MM/yyyy")}
                            `}
                            </span>
                            {openDate &&
                                < DateRange
                                    onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}

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

                                    <input type="number" onChange={e => setMin(e.target.value)} className="lsPersonInput" />
                                </div>
                                <div className="lsPersonItem">
                                    <span className="lsPersonText">Max price
                                        <small> (per night)</small>
                                    </span>
                                    <input type="number" onChange={e => setMax(e.target.value)} className="lsPersonInput" />
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
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? ("Loading please wait") : (
                            <>
                                {data.map((item) => (

                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default List