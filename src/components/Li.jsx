import React from "react";

export default function Li(props) {
  return (
    <li>
      <a href={"#" + props.section}>{props.children}</a>
    </li>
  );
}
