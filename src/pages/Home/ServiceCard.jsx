import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-full bg-base-100 border-2 ">
            <figure className="px-10 pt-10 h-full">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <div className="flex items-center justify-between">
                    <h4 className='font-bold text-2xl text-orange-600'>Price: {price}</h4>
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;