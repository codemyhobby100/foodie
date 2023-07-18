import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import "./delivery.css";

const Delivery = () => {
  return (
    <section className="delivery-section padding">
      <h1>Delivery details</h1>
      <img src="/images/map.png" className="" />
      <div className="location">
        <div className="address">
          <GoLocation />{" "}
          <input type="text" placeholder="32, Kingston Street..." />
        </div>
        <span className="time">15 - 25 mins</span>
        <div className="phone">
          <BsTelephone /> <input type="number" placeholder="Phone Number" />
        </div>
        <h2>Payment Method</h2>
        <div className="payment">
          <AiOutlineCreditCard />
          <select name="payment" id="payment">
            <option value="disabled" disabled selected>
              Add a Payment Method
            </option>
            <option value="opt1">Opt1</option>
            <option value="opt2">Opt2</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
