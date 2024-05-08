import React, { useState } from "react";
import "./todoList.scss";
import Modal from "../modal/Modal";

const TodoList = () => {
  const [user, setUserModal] = useState(null);

  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [address, setAddress] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [gender, setGender] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: new Date().getTime(),
      fullName: "Azizbek Tolipov",
      birthdate: "20.04.2002",
      telNumber: "990804320",
      urlImg:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88",
      address: "Toshkent",
      gender: "male",
    },
    {
      id: new Date().getTime(),
      fullName: "Sardor Toirov",
      birthdate: "20.04.2005",
      telNumber: "934568789",
      urlImg:
        "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
      address: "Buxoro",
      gender: "male",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editUser) {
      let index = users?.findIndex((el) => el.id === editUser.id);
      let updatedUser = {
        id: editUser.id,
        fullName,
        address,
        birthdate,
        telNumber,
        urlImg,
        gender,
      };
      let updatedUsers = users;
      updatedUsers.splice(index, 1, updatedUser);
      console.log(updatedUsers);
      setUsers(updatedUsers);
      setEditUser(null);
    } else {
      const user = {
        id: new Date().getTime(),
        fullName,
        birthdate,
        telNumber,
        urlImg,
        address,
        gender: gender,
      };
      setUsers((prev) => [...prev, user]);
    }
    setFullName("");
    setBirthdate("");
    setTelNumber("");
    setAddress("");
    setUrlImg("");
  };

  const handleDelete = (id) => {
    setEditUser(null);
    if (confirm("ochirmoqchimisan")) {
      let filterUsers = users?.filter((user) => user.id !== id);
      setUsers(filterUsers);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFullName(user.fullName);
    setBirthdate(user.birthdate);
    setTelNumber(user.telNumber);
    setAddress(user.address);
    setUrlImg(user.urlImg);
    setGender(user.gender);
  };

  console.log(users);
  const userCards = users?.map((user) => (
    <div className="user__card" key={user.id}>
      <div className="user__card__img">
        <img onClick={() => setUserModal(user)} src={user.urlImg} alt="" />
      </div>
      <div className="user__card__info">
        <h3>{user.fullName}</h3>
        <h3>{user.birthdate}</h3>
        <p>{user.telNumber}</p>
        <p>{user.address}</p>
        <p>{user.gender}</p>
        <button className="form__btn" onClick={() => handleDelete(user.id)}>
          Delete
        </button>
        <button className="form__btn" onClick={() => handleEdit(user)}>
          Edit
        </button>
      </div>
    </div>
  ));

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
          <label htmlFor="urlImg">Url Img</label>
          <input
            value={urlImg}
            onChange={(event) => setUrlImg(event.target.value)}
            required
            type="text"
            placeholder="Enter your Url Img"
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
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button className="form__btn">{editUser ? "Save" : "Create"}</button>
      </form>
      <div className="user__cards container">{userCards}</div>
      {user ? <Modal data={user} close={setUserModal} /> : <></>}
    </div>
  );
};
export default TodoList;
