import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Router";

const roomBooking = [
  {
    number: 1,
    room_number: 101,
    name: "Aman",
    address: "Mumbai",
    mobile_number: "21323213",
  },
  {
    number: 2,
    room_number: 102,
    name: "Ankit",
    address: "Pune",
    mobile_number: "21323213",
  },
  {
    number: 3,
    room_number: 103,
    name: "Akash",
    address: "Punjab",
    mobile_number: "21323213",
  },
];

function App() {
  useEffect(() => {
    localStorage.setItem("roomData", JSON.stringify(roomBooking));
  }, []);
  return (
    <>
      <div className="App">
        <Link exact="true" to="/">
          List
        </Link>
        <Link exact="true" to="/add">
          Add
        </Link>
      </div>
      <Navigation />
    </>
  );
}

export default App;
