import React from "react";

export default function UserCard({ name, age }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-3">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
}