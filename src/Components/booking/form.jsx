import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");
  const [room_number, setRoomNumber] = useState("");
  const { id } = useParams();
  let data = JSON.parse(localStorage.getItem("roomData"));
  useEffect(() => {
    setName("");
    setAddress("");
    setPhone("");
    setEditId(id);
    if (id) {
      var filteredData = data.filter((el) => {
        return el.number === parseInt(id);
      });
      if (filteredData) {
        setName(filteredData[0].name);
        setAddress(filteredData[0].address);
        setPhone(filteredData[0].mobile_number);
        setRoomNumber(filteredData[0].room_number);
      }
    }
  }, [id]);

  const submitForm = () => {
    let msg = "";
    if (!(name && address && phone && room_number)) return false;
    let obj = {
      name,
      address,
      mobile_number: phone,
      number: data.length + 1,
      room_number,
    };
    if (!editId) {
      data.push(obj);
      localStorage.setItem("roomData", JSON.stringify(data));
      msg = "Booking has been created!";
      setName("");
      setAddress("");
      setPhone("");
      setRoomNumber("");
    }

    if (editId) {
      data.map((el, i) => {
        if (el.number === parseInt(editId)) {
          obj.number = el.number;
          data[i] = obj;
        }
      });
      console.log(data, "================");
      localStorage.setItem("roomData", JSON.stringify(data));
      msg = "Booking has been updated!";
    }

    alert(msg);
  };

  return (
    <div>
      <label>
        {editId ? `# ${editId} Booking Id Edit Booking` : "Create Booking"}
      </label>
      <br />
      <input
        name="name"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="error-msg">{name ? "" : "Name is required"}</div>
      <br />
      <input
        name="address"
        value={address}
        placeholder="Enter Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <div className="error-msg">{address ? "" : "Address is required"}</div>
      <br />
      <input
        name="phone"
        value={phone}
        placeholder="Enter Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <div className="error-msg">
        {phone ? "" : "Mobile Number is required"}
      </div>
      <br />
      <select
        onChange={(e) => {
          setRoomNumber(e.target.value);
        }}
      >
        <option>Select Room Number</option>
        <option>101</option>
        <option>102</option>
        <option>103</option>
        <option>104</option>
        <option>105</option>
      </select>
      <button onClick={() => submitForm()}>Submit</button>
    </div>
  );
};

export default Form;
