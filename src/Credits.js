import React from "react";

export default function Credits(props) {
  let userCredits = "Photo Credits: " + props.credits;
  let pageLink = "Link: " + props.pageURL;

  return (
    <div className="Credits">
      <div>{userCredits}</div>
      <a href={props.pageURL}>{pageLink}</a>
    </div>
  );
}
