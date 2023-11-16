import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return(
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Faral</h1>
      <Avatar img="https://miro.medium.com/v2/resize:fit:2400/1*RheGhOMeziP_24PEnbjBhQ.jpeg"/>
      {contacts.map(createCard)}

    </div>
  );
}

export default App;
