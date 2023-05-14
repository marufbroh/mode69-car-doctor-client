import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import BookingsRow from './BookingsRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    // console.log(bookings);
    const URL = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [URL])

    const handleDelete = (id) => {
        const prossed = confirm("Are you sure want to delete")
        if (prossed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                })
        }
    }

    const bookingBookingConfirm = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    // const newBookings = [...remaining, updated]
                    setBookings([...remaining, updated])
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            {/* <label>
                                <input type="checkbox" className="checkbox" />
                            </label> */}
                        </th>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} bookingBookingConfirm={bookingBookingConfirm}></BookingsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;