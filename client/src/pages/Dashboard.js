import {React, useState} from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import FoodLog from '../components/FoodLog';

export default function Dashboard() {
    // console.log(Auth.getProfile());
    
    const [menuState, setMenuState] = useState(0);
    const [isShown, setIsShown] = useState(false);

    const handleClick = (id) => {
        setIsShown(current => !current);
        setMenuState(id);
    };

    return(
        <div>
           <div className="hero bg-base-200 h-48">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello, {Auth.getProfile().data.userName}!!</h1>
                        <p className="py-6">An apple a day, keeps the doctor away!</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <ul className="menu bg-base-100">
                        <li><a className="hover:active" key="0" id="0" onClick={ ()=>handleClick("0")}>🍔 Foods</a></li>
                        <li><a className="hover:active" key="1" id="1" onClick={ ()=>handleClick("1")}>🏆 Activities</a></li>
                    </ul>
                </div>
                <div className="col-span-3">
                    {menuState === "0" ? (
                        <div>
                            <FoodLog/>
                        </div>
                    ) : menuState === "1" ? (
                        <div>
                            test activity
                        </div> 
                    ) : (
                        <></>
                    )}
                </div>
            </div>
           
           
        </div>
    )
};