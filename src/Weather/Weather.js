import React, {useEffect, useState} from 'react';
import './Weather.css';

function Weather() {
    const [days, setDays] = useState([]);
    const [dayHottestTemp, setHottestDayTemp] = useState(0);
    const [dayColdestTemp, setColdestDayTemp] = useState(0);

    useEffect(() => {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then((res) => res.json())
            .then((data) => setDays(data))
    }, []);

    function hottestDay(days) {
        if (days.length > 0 && !dayHottestTemp) {
            setHottestDayTemp(days[0]["temperature"])
        }
        days.map((day) => {
                if (day["temperature"] > dayHottestTemp) {
                    setHottestDayTemp(day["temperature"])
                }
        })
        return dayHottestTemp;
    }
    function coldestDay(days) {
        if (days.length > 0 && !dayColdestTemp) {
            setColdestDayTemp(days[0]["temperature"])
        }
        days.map((day) => {
            if (day["temperature"] < dayColdestTemp) {
                setColdestDayTemp(day["temperature"])
            }
        })
        return dayColdestTemp;
    }

    // function tempratureMaxCheck(mode, days) {
    //     if (days.length > 0 && !dayHottestTemp) {
    //         setHottestDayTemp(days[0]["temperature"])z
    //     }
    //     if (days.length > 0 && !dayColdestTemp) {
    //         setColdestDayTemp(days[0]["temperature"])
    //     }
    //     days.map((day) => {
    //             if (mode === "hot") {
    //                 if (day["temperature"] > dayHottestTemp) {
    //                     setHottestDayTemp(day["temperature"])
    //                 }
    //             return dayHottestTemp
    //             } else if (mode === "cold") {
    //                 if (day["temperature"] < dayColdestTemp) {
    //                     setColdestDayTemp(day["temperature"])
    //                 }
    //             }return dayColdestTemp
    //
    //         }
    //     );
    // }

    return (
        <div className="Weather">
            <p>
                Use the following API to display the hottest and coldest days:<br/>
                <code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
            </p>
            <div className="Weather__stats">
                <strong>Hottest day is:{hottestDay(days)}</strong>
            </div>
            <div className="Weather__stats">
                <strong>Coldest day is:{coldestDay(days)}</strong>
            </div>
        </div>
    );
}

export default Weather;
