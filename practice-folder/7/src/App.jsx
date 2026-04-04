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
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <Header />

      <main className="p-4 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} age={user.age} />
        ))}
      </main>

      <Footer />
         </div>
  );
}
