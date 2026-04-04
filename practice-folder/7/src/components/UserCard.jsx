import React from "react";
import "./UserCard.css";


export default function UserCard({ name, age }) {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">Age: {age}</p>
      <button className="btn">View Profile</button>
    </div>
  );
}