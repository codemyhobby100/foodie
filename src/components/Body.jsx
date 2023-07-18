import { useState } from "react";
import "./body.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Data = [
  {
    id: 1,
    header: "Full Breakfast",
    text: "Yam, potatoes and plantain, served with sauteed vegetables..",
    price: 3000,
  },
  {
    id: 2,
    header: "French Toast",
    text: "Yam, potatoes and plantain, served with sauteed vegetables..",
    price: 3000,
  },
  {
    id: 2,
    header: "Full Pancakes",
    text: "Yam, potatoes and plantain, served with sauteed vegetables..",
    price: 3000,
  },
];

const Body = () => {
  return (
    <main className="padding main-container">
      <h1 className="order-sum">
        <AiOutlineArrowLeft /> Order Summary
      </h1>
      <h1>Breakfast Hub</h1>

      <div className="sub-container">
        <div className="3-orders">
          <h3 className="h3Orders">
            3 orders from <span>Breakfast Hub</span>
          </h3>
          <div className="card-wrapper">
            {Data.map((data) => {
              return <Card key={data.id} {...data} />;
            })}
          </div>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <hr />
          <div className="sum-sum">
            <span>Orders</span>
            <span>$9,000</span>
          </div>
          <div className="sum-sum">
            <span>Delivery</span>
            <span>$400</span>
          </div>
          <div className="sum-sum">
            <span>Services</span>
            <span>$50</span>
          </div>
          <div className="total">
            <span>TOTAL</span>
            <span>$9,450</span>
          </div>
          <button className="order-btn">CONFIRM ORDER</button>
        </div>
      </div>
    </main>
  );
};

const Card = ({ header, text, price, id }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className=" card-div">
        <div className="buttons">
          <svg
            onClick={handleDecrease}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19.5" stroke="#A6A6A6" />
            <path d="M30 20H10V22H30V20Z" fill="#381E72" />
          </svg>

          <span>{count}</span>
          <svg
            onClick={handleIncrease}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19.5" stroke="#A6A6A6" />
            <path
              d="M18.5714 30V21.4286H10V18.5714H18.5714V10H21.4286V18.5714H30V21.4286H21.4286V30H18.5714Z"
              fill="#381E72"
            />
          </svg>
        </div>
        <div className="order-texts">
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
        <div className="price">${price}</div>
      </div>
      {id < 3 && <hr />}
    </>
  );
};

export default Body;
