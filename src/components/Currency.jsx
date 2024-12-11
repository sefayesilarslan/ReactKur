import React, { useState } from 'react'
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "xxxxxx"; //Api keyinizi giriniz.



function Currency() {
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const total = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(total);
    }
    return (
        <div className="converter-container">
            <h1>Döviz Çevir</h1>
            <div className="converter">
                <input type="number" placeholder="Miktar" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select onChange={(e) => setFromCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>TRY</option>
                    <option>EUR</option>
                </select>
                <select onChange={(e) => setToCurrency(e.target.value)}>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input type="text" placeholder="Çevirilen Miktar" value={result} onChange={(e) => setResult(e.target.value)} />
                <button onClick={exchange}>Çevir</button>
            </div>
        </div>
    )
}

export default Currency