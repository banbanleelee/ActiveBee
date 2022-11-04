import {React, useState } from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {GET_ADDED_FOOD_BY_USER_ID} from '../utils/queries';
const dayjs = require('dayjs')

export default function FoodLog () {


    const { loading, data } = useQuery(GET_ADDED_FOOD_BY_USER_ID, { variables: { userId: Auth.getProfile().data._id }});
    const addedFood = data?.getAddedFoodByUserId || [];
    console.log(addedFood);
    // console.log(dayjs(parseInt(addedFood[0].addedOn)).format('MMM D'))
    return(
        <div className="overflow-x-auto card bg-slate-50">
            <table className="table w-full bg-slate-50">
                {/* <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead> */}
                <tbody>
                {addedFood.map((item)=> (
                    <tr className='bg-slate-50'>
                    <th className='bg-slate-50 text-gray-800'>{item.foodName}</th>
                    <td className='bg-slate-50 text-gray-800'>{item.quantity} {item.unit}, {item.calories} calories</td>
                    <td className='bg-slate-50 text-gray-800'>{item.category.categoryName}</td>
                    <td className='bg-slate-50 text-gray-800'>{dayjs(parseInt(addedFood[0].addedOn)).format('MMM D, dddd')}</td>
                </tr>
                ))}
                
                </tbody>
            </table>
</div>
    )
};