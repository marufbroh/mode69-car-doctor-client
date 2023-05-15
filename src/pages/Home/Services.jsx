import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('https://car-doctor-server-ochre-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='my-12'>
            <div className='text-center space-y-5'>
                <h4 className='text-2xl font-bold text-orange-600'>Our Services</h4>
                <h2 className='text-5xl font-bold '>Our Service Area</h2>
                <p className='text-lg font-normal text-slate-600'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 my-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-outline text-orange-600 font-bold">More Services</button>
            </div>
        </section>
    );
};

export default Services;