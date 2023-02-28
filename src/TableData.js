import React, { useState, useEffect } from 'react';
import './TableData.css';
 
function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=7X4U95SLAKE7DUW7';
 
    useEffect(() => {
        fetchData()
    }, [])
  
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                getData(response.data);
            })
 
    }
 
    return (
        <div>
            <h1>Stock Update</h1>
            <tbody>
                <tr>
                    <th>DateTime</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </tr>
                {data.map((item, i) => (
                    <div key={i}>
                    <tr>
                        <td>{item.datatime}</td>
                        <td>{item.open}</td>
                        <td>{item.high}</td>
                        <td>{item.low}</td>
                        <td>{item.close}</td>
                        <td>{item.volume}</td>
                    </tr>
                    </div>
                ))}
            </tbody>
 
        </div>
    );
}
 
export default TableData;