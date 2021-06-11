import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [roomBooking, setBookings] = useState([]);
  useEffect(() => {
    setBookings(
      JSON.parse(localStorage.getItem("roomData"))
        ? JSON.parse(localStorage.getItem("roomData"))
        : []
    );
  }, []);

  const deleteRecord = (index) => {
    roomBooking.splice(index, 1);
    setBookings(roomBooking);
    localStorage.setItem("roomData", JSON.stringify(roomBooking));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Room No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {roomBooking.map((column, j) => (
            <tr key={j}>
              <td>{column?.number}</td>
              <td>{column?.room_number}</td>
              <td>{column?.name}</td>
              <td>{column?.address}</td>
              <td>{column?.mobile_number}</td>
              <td>
                <Link exact="true" to={`/edit/${column?.number}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure for delete #" + column?.number + "?"
                      )
                    ) {
                      deleteRecord(j);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default memo(Booking);
