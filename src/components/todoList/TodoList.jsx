import React, { useState } from "react";
import "./todoList.scss";

const TodoList = () => {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  //   const [user, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id: new Date().getTime(),
      fullName,
      birthdate,
      telNumber,
      address,
      gender: gender,
    };
    console.log(user);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__card">
          <label htmlFor="fullname">Fullname</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="form__card">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            required
            name="birthdate"
            type="date"
            placeholder="Enter your birthdate"
          />
        </div>
        <div className="form__card">
          <label htmlFor="telNumber">TelNumber</label>
          <input
            value={telNumber}
            onChange={(event) => setTelNumber(event.target.value)}
            required
            type="text"
            placeholder="Enter your telNumber"
          />
        </div>
        <div className="form__card">
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
            name="address"
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div className="form__card">
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option name="gender" value="male">
              Male
            </option>
            <option name="gender" value="female">
              Female
            </option>
          </select>
        </div>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};
export default TodoList;
