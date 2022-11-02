// import {ViewfinderCircleIcon} from '@heroicons/react/24/outline';
import Nutrition from "../components/Nutrition";
import React, { useState, useEffect } from 'react';

export default function FoodResult() {

    const [info, setInfo] = useState({
        data: "loading",
    });
    const [emoji, setEmoji] = useState({
        data: "loading",
    });
    const [inputValue, setInputValue] = useState();

    const searchFood = (keyword) => {
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=1121c7af&app_key=%202967cebace25f945308664861d77c2c5&ingr=${keyword}&nutrition-type=cooking`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            setInfo({
                data:data,
            })
        })
        .catch(function (err) {
        console.error(err);
        });
    };

    const searchEmoji = (keyword) =>{
        fetch(`https://emoji-api.com/emojis?search=${keyword}&access_key=fd2e0e9dcc4f566b87cf2954fb5025d75cebbfc7`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            setEmoji({
                data:data,
            })
        })
        .catch(function (err) {
        console.error(err);
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        searchFood(inputValue);
        searchEmoji(inputValue);
    };

    const handleChange = (event) => {
        let query = event.target.value;
        // console.log(event.target.value);
        setInputValue(query);
    };
    
    // console.log(info);

    return (
        <div className="flex justify-center">
            <div className="card my-2 w-2/3 h-48 bg-base-100 shadow-xl image-full">
                <figure><img className="bg-cover" src="https://placeimg.com/400/100/animals" alt="background" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Find nutrition facts for your favorite food!</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <div className="input-group flex justify-center mt-4">
                                <input type="text" placeholder="Enter a food name..." className="input input-bordered text-gray-200" name="keyword" onChange={handleChange} value={inputValue}/>
                                <button className="btn btn-square btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    {info ? (<Nutrition info={info} emoji={emoji}/>):(<div></div>)}
                    
                </div>
            </div>
        </div>
        
    )
};