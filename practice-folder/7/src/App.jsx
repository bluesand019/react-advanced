import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

export default function App() {
  const users = [
    { id: 1, name: "Dip", age: 21 },
    { id: 2, name: "Alex", age: 25 },
    { id: 3, name: "Sam", age: 22 }
  ];

  return (
    <div className="app">
      <Header />

      <main className="main">
        <h2 className="title">User List</h2>
        <div className="card-container">
          {users.map((user) => (
            <UserCard key={user.id} name={user.name} age={user.age} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
