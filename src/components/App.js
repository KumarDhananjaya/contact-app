import React from "react";
import "./App.css";
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: 1,
      name: "kumar",
      email: "kumar62.shivu@gmail.com",
    },
    {
      id: 2,
      name: "dhananjay",
      email: "kumardhananjaya.edu@gmail.com",
    }
]
  return (
    <div>
      <Header />
      <AddContact/>
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
