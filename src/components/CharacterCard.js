import React, { useState } from "react";

const CharCard = props => {
  return (
    <>
      <div className="buttons">
        <a className="button is-primary" type="submit">
          Yo
        </a>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">name</p>
              <p className="subtitle is-6">species</p>
              <p className="subtitle is-6">gender</p>
              <p className="subtitle is-6">origin</p>
              <p className="subtitle is-6">location</p>
            </div>
          </div>

          <div className="content">This is the card.</div>
        </div>
      </div>
    </>
  );
};

export default CharCard;
