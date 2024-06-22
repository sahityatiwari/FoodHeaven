// src/components/ReservationList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';


const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://foodheavenback.onrender.com/api/v1/reservation/askdata');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://foodheavenback.onrender.com/api/v1/reservation/${id}`);
      setReservations(reservations.filter(reservation => reservation._id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <NavBar />
      <div className="overlay"></div>
      <div className="container">
        {/* <h2>Reservation List</h2> */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(reservation => (
                <tr key={reservation._id}>
                  <td>{reservation.firstname}</td>
                  <td>{reservation.lastname}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.phone}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(reservation._id)} 
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReservationList;
