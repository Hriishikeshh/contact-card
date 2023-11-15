import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading">DIWALI FARAL</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        mail={contacts[0].mail}
      />

      <Card 
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
      />

      
    </div>
  );
}

export default App;
