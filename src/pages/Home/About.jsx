import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <section className="hero my-24">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-2/3 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"/>
                </div>
                <div className='lg:w-1/2'>
                    <h4 className='font-bold text-2xl text-orange-600'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </section>
    );
};

export default About;