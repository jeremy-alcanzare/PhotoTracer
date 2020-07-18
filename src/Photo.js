import React from "react";

export default function Photo(props) {
  return (
    <img
      src={props.imageURL}
      className="Photo"
      alt="Click 'get photo' to load an image"
    />
  );
}
