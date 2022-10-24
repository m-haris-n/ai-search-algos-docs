import React from "react";

export default function Li(props) {
  const section = props.section ? props.section : "";

  return (
    <li onClick={() => props.toggler()}>
      <a
        href={"#" + section}
        className="opacity-60 hover:opacity-100 transition-all"
      >
        {props.children}
      </a>
    </li>
  );
}
