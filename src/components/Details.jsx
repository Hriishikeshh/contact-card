import React from "react";

function Details(props){
  return(
    <div className="bottom">
      <div className="info">
            <p>{props.tel}</p>
            <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Details;