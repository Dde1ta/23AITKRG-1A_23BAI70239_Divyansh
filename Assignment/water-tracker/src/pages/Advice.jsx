import { useState, useEffect } from 'react';
import { fetchQuote } from '../api/fetchQuote'; 

export const Advice = () => {
    const [quote, setQuote] = useState("Loading...");

    useEffect(() => {
        const getQuote = async () => {
            setQuote(await fetchQuote());
        }

        getQuote();
    }, []);

    return(
        <div className='Advice'>
            <h1>Advice : {quote}</h1>
        </div>
    )
}

export default Advice;