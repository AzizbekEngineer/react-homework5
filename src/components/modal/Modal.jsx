import React from "react";

const Modal = ({ data, close }) => {
  return (
    <>
      <div onClick={() => close(null)} className="user__overlay"></div>
      <div className="user__detail">
        <div onClick={() => close(null)} className="close__btn">
          x
        </div>
        <div className="user__deatil__img">
          <img src={data.urlImg} alt="" />
        </div>
        <div className="user__detail__info">
          <h3>{data.fullName}</h3>
          <p>{data.address}</p>
          <p>{data.birthdate}</p>
          <p>{data.telNumber}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
