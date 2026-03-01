/**
 *  API returns :-
 * {
 *      "slip": { 
 *          "id": 18,
 *           "advice": "Don't judge a book by its cover, unless it has a synopsis on the back."
 *         }
 * }
 * 
 */


const url = 'https://api.adviceslip.com/advice';

export const fetchQuote = async () => {

    const response = await fetch(url);
    const data = await response.json();
    return data.slip.advice;
    
}