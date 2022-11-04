
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

    const [formState, setFormState] = useState({
        foodName:'',
        calories: '',
        category: '',
        addedBy: Auth.getProfile().data._id,
        quantity: '',
        unit: '',  
    });

    const [addFood, {error, data}] = useMutation(ADD_FOOD);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
        console.log(formState);
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const { data } = await addFood({
            variables: { ...formState },
          });
          console.log(data);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        // setFormState({
        //     foodName:'',
        //     calories: '',
        //     category: '',
        //     addedBy: Auth.getProfile().data._id,
        //     quantity: '',
        //     unit: '',  
        // });
      };
      console.log(formState);

    return(
        <div>
            <a href="#food-form" className="btn glass w-full my-2">Log your own food!</a>
            <div className="modal" id="food-form">
                <div className="modal-box">
                    <form className="w-full" >
                        <label className="input-group my-1">
                            <span className='text-gray-800 w-1/4 bg-primary'>Food Name</span>
                            <input 
                                type="text" 
                                placeholder="Apple" 
                                className="input input-bordered w-3/4 text-gray-300" 
                                name="foodName"
                                value={formState.foodName}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </label>
                        <label className="input-group my-1">
                            <span className='text-gray-800 w-1/4 bg-primary'>Serving</span>
                            <input 
                                type="text" 
                                placeholder="1" 
                                className="input input-bordered w-1/2 text-gray-300" 
                                name="quantity"
                                value={formState.quantity}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <select className="select select-bordered text-gray-300 w-1/4" name="unit" onChange={handleChange}>
                                <option className='text-gray-300' value="serving">Serving</option>
                                <option className='text-gray-300' value="gram">Gram</option>
                                <option className='text-gray-300' value="ounce">Ounce</option>
                                <option className='text-gray-300' value="fluid-ounce">Fluid Ounce</option>
                            </select>
                        </label>
                        <label className="input-group my-1">
                            <span className='text-gray-800 w-1/4 bg-primary'>Calories</span>
                            <input 
                                type="text" 
                                placeholder="120" 
                                className="input input-bordered text-gray-300 w-3/4" 
                                name="calories"
                                value={formState.calories}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </label>
                        <label className="input-group my-1">
                            <span className='text-gray-800 w-1/4 bg-primary'>Categories</span>
                            <select className="select select-bordered text-gray-300 w-3/4" name="category" onChange={handleChange}>
                                <option className='text-gray-300' value="636446efc6f83a7683c807c7">Breakfast</option>
                                <option className='text-gray-300' value="636446f7c6f83a7683c807c9">Lunch</option>
                                <option className='text-gray-300' value="636446fdc6f83a7683c807cb">Dinner</option>
                                <option className='text-gray-300' value="63644701c6f83a7683c807cd">Snack</option>
                            </select>
                        </label>
                        <div className="modal-action">
                            {/* <button href="#" className="btn glass text-gray-300" onClick={handleFormSubmit}>Submit</button> */}
                            <Link to="/" className="btn glass text-gray-300" onClick={handleFormSubmit}>Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
            {info.data==='loading' ? (
                <>
                </>
            ) : (
                <div>
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
                </div>
                
            )}            
        </div>
    )
}