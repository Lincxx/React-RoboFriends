import React, { Component } from 'react';

//we are destructing from the props\
//const Card = (props)
const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5
    ">
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

export default Card;