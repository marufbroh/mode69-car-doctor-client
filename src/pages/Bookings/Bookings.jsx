import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import BookingsRow from './BookingsRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    // console.log(bookings);
    const URL = `https://car-doctor-server-ochre-nine.vercel.app/orders?email=${user?.email}`
    useEffect(() => {
        fetch(URL, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [URL, navigate])

    const handleDelete = (id) => {
        const prossed = confirm("Are you sure want to delete")
        if (prossed) {
            fetch(`https://car-doctor-server-ochre-nine.vercel.app/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                })
        }
    }

    const bookingBookingConfirm = id => {
        fetch(`https://car-doctor-server-ochre-nine.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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