import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-full bg-base-100 border-2 ">
            <figure className="px-10 pt-10 h-full">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <div className="flex items-center justify-between">
                    <h4 className='font-bold text-2xl text-orange-600'>Price: {price}</h4>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;