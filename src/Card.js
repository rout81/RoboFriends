import React from "react";

const Card = ({id, name, email}) => {
  return (
    <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2 className="ma2">{name}</h2>
      <p className="ma2">{email}</p>
    </div>
  );
};

export default Card;
