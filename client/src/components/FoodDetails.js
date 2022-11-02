import React, { useState, useEffect } from 'react';

export default function FoodDetails( {foodId}) {
    const [details, setDetails] = useState({
        calories: "",
        totalWeight: "",
    });

    const [healthLabels, setHealthLabels] = useState([]);

        // console.log(quantity);
        // console.log(uri);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: [
            {
                quantity: 1,
                measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                foodId: foodId,
            }
        ] })
    };

    fetch('https://api.edamam.com/api/food-database/v2/nutrients?app_id=1121c7af&app_key=%202967cebace25f945308664861d77c2c5', requestOptions)
        .then(response => response.json())
        .then(function (data) {
            // console.log(data);
            setDetails({
                calories:data.calories,
                totalWeight: data.totalWeight,
        })
        healthLabels.push(data.healthLabels);
        // console.log(healthLabels[0][0]);
    })

    return(
        <div className='flex items-center space-x-3 text-gray-300'>
            <ul>
                <li>
                    <div>
                        {(6*details.calories).toFixed(0)} calories per 6 oz
                    </div>
                </li>
                <li>
                {healthLabels[0] ? (
                    <>
                        {healthLabels[0][0] ? (
                        <div className="badge badge-accent badge-sm text-gray-100">
                            {healthLabels[0][0]}
                        </div>
                        ):(<></>)}
                        {healthLabels[0][1] ? (
                                <div className="badge badge-accent badge-sm text-gray-100">
                                    {healthLabels[0][1]}
                                </div>
                        ):(<></>)}
                        {healthLabels[0][2] ? (
                                <div className="badge badge-accent badge-sm text-gray-100">
                                    {healthLabels[0][2]}
                                </div>
                        ):(<></>)}
                    </>
                ):(<></>)}
                </li>
            </ul>
            
           
        </div>
    )
}