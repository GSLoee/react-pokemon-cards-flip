import React, {useState, useEffect} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useAxios(baseUrl){
    const [cards, setCards] = useState([]);
    const addCard = async (endpoint = '') => {
    try{
        const url = baseUrl + endpoint
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    } catch(e){
        console.error('THERE IS AN ERROR', e)
    }
    };
    return [cards, addCard] 
}

export default useAxios