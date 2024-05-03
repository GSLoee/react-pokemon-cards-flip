import React, {useState, useEffect} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";


function useFlip(){
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return [isFacingUp, flipCard]
}

export default useFlip; 