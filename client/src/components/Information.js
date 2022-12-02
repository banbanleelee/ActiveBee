
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../utils/mutations';
import Auth from '../utils/auth';


import FoodDetails from './FoodDetails';
// import FoodForm from "./FoodForm";

export default function Information( {info, emoji}) {
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
                            {info.map((item) => (
                            <tr className="hover" key={info.indexOf(item)}>
                                <th>
                                    <div className="icon">
                                        {emoji.data!=null ? (
                                            emoji.data[0].character
                                        ):(<span>🍴</span>)}
                                    </div>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="font-bold text-gray-100">{item.description}</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="my-1 text-sm text-gray-100">{item.inputFoods.map((item)=>(<span className="badge mr-1">{item.ingredientDescription.split(",")[0]} </span>))}</div>
                                    </div>
                                </td>
                                
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