
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../utils/mutations';
import Auth from '../utils/auth';


import FoodDetails from './FoodDetails';
// import FoodForm from "./FoodForm";

export default function Nutrition( {info, emoji}) {
    // console.log(info);
    // console.log(Auth.getProfile().data._id);

    return(
        <div>
            {info.data==='loading' ? (
                <>
                </>
            ) : (
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <tbody>
                            {info.data.hints.map((item) => (
                            <tr className="hover">
                                <th>
                                    <div className="icon">
                                        {emoji.data!=null ? (
                                            emoji.data[0].character
                                        ):(<span>🍴</span>)}
                                    </div>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-gray-100">{item.food.label}</div>
                                            {item.food.brand ? (
                                                <div className="badge badge-ghost badge-sm text-gray-200">
                                                    {item.food.brand}
                                                </div>   
                                            ):(<></>)}
                                        </div>
                                    </div>
                                </td>
                                
                                <td>
                                    <FoodDetails foodId={item.food.foodId} uri={item.measures[0].uri}/>
                                </td>
                                {/* <td>{Object.keys(item.food.nutrients).map((key, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>
                                            {key}: {item.food.nutrients[key].toFixed(0)}
                                            </h2>
                                        </div>
                                        );
                                    })}
                                </td> */}
                                <th>
                                <button className="btn btn-primary">Add</button>
                                </th>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}            
        </div>
    )
}