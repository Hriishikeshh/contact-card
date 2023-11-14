import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        mail={contacts[0].mail}
      />
    </div>
  );
}

export default App;
