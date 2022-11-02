import {ViewfinderCircleIcon} from '@heroicons/react/24/outline';

export default function Calories() {
    return (
        <div className="flex justify-center">
            <div className="card my-2 w-2/3 h-48 bg-base-100 shadow-xl image-full">
                <figure><img className="bg-cover" src="https://placeimg.com/400/100/animals" alt="background" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Find nutrition facts for your favorite food!</h2>
                    <div className="form-control">
                        <div className="input-group flex justify-center mt-4">
                            <input type="text" placeholder="Enter a food name..." className="input input-bordered text-gray-200" />
                            <button className="btn btn-square btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};