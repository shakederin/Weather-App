import { MiddlewareArray } from "@reduxjs/toolkit";
import axios from "axios"
const key = "7d78d78bc210fe93bbe1f651bb6308d1"
export const Middleware = (store)=>(next)=> async(action)=>{
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.city}&appid=${key}&units=metric`);
        next({...action, payload: response})
    } catch (error) {
        console.log(error);
    }
    
} 