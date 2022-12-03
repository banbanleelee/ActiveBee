
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../utils/mutations';
import Auth from '../utils/auth';


import FoodDetails from './FoodDetails';
import FoodForm from "../pages/FoodForm";

export default function Information( {info, emoji}) {
    // console.log(info);
    // console.log(Auth.getProfile().data._id);
    
    const processedArray = (obj) => {
        const ingredientArr=[];
        obj.inputFoods.map((item)=>ingredientArr.push(item.ingredientDescription.split(",")[0]));
        const updatedIngredienArr = [...new Set(ingredientArr)];
        return updatedIngredienArr;
    };

    return(
        <div>
            {info.data==='loading' ? (
                <>
                </>
            ) : (
                <div className="overflow-x-auto w-full">
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-gray-100">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <FoodForm/>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">Yay!</label>
                            </div>
                        </div>
                        </div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="font-bold text-gray-100">food info</th>
                                <th className="font-bold text-gray-100">Nutrition Facts per 100g</th>
                                <th className="font-bold text-gray-100">Save to log</th>
                            </tr>
                        </thead>
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
                                        <div className="my-2 text-sm text-gray-100">{processedArray(item).map((item)=>(<span className="badge mr-1">{item}</span>))}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <p className="text-gray-100 text-sm">Protein: {item.foodNutrients[0].amount}{item.foodNutrients[0].nutrient.unitName}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <p className="text-gray-100 text-sm">Fat: {item.foodNutrients[1].amount}{item.foodNutrients[0].nutrient.unitName}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <p className="text-gray-100 text-sm">Carbs: {item.foodNutrients[2].amount}{item.foodNutrients[0].nutrient.unitName}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <p className="text-gray-100 text-sm">Calories: {item.foodNutrients[3].amount}{item.foodNutrients[3].nutrient.unitName}</p>
                                    </div>
                                </td>
                                <th>
                                <label htmlFor="my-modal" className="btn btn-primary">Add</label>
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