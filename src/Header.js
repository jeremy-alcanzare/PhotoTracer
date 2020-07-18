import React from "react";

export default function Header(props) {
  return (
    <div>
      <label>
        Hide Photo
        <input name="hidePhoto" type="checkbox" onClick={props.onClick} />
      </label>
      <label>
        Hide Canvas
        <input name="hideCanvas" type="checkbox" onClick={props.onClick} />
      </label>
    </div>
  );
}
