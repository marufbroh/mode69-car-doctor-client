import React from 'react';
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <section className="carousel w-full lg:h-[80vh] my-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-xl" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-transparent h-full lg:pl-20 rounded-xl">
                    <div className='text-white space-y-8 w-1/2'>
                        <h2 className='font-bold text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-sans text-slate-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-5 gap-4">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;