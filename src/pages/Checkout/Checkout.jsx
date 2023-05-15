import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    // console.log(service);
    const { price, title, _id, img } = service
    // console.log(service);
    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        // const dueAmmount = form.due.value;
        const message = form.message.value;
        const checkoutOrder = { customerName: name, date, email, service: title, service_id: _id, img: img, price: price, message };
        // console.log(checkoutOrder);

        fetch('https://car-doctor-server-ochre-nine.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutOrder)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })

    }
    return (
        <section className='container mx-auto bg-[#F4F3F0] lg:p-24 p-4 my-12 rounded-lg'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-3'>Check Out {title}!</h3>
            </div>
            <form onSubmit={handleCheckout}>
                {/* form row */}
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name='date' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Due Ammount</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={'$' + price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Message</span>
                    </label>
                    <label className="input-group">
                        <textarea name='message' className="textarea textarea-bordered textarea-lg w-full" placeholder="Your Message"></textarea>
                    </label>
                </div>
                <div className='flex w-full mt-4'>
                    <button className='bg-orange-600 p-3 rounded w-full font-bold text-white' type='submit'>Order Confirm</button>
                </div>
            </form>
        </section>
    );
};

export default Checkout;