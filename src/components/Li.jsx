import React from "react";

export default function Li(props) {
  const section = props.section ? props.section : "";

  return (
    <li
    // style={{
    //   color:
    //     theme.colorScheme === "dark"
    //       ? theme.colors.gray[5]
    //       : theme.colors.dark[3],
    //   "&:hover": {
    //     color:
    //       theme.colorScheme === "dark"
    //         ? theme.colors.gray[0]
    //         : theme.colors.dark[9],
    //   },
    // }}
    >
      <a
        href={"#" + section}
        className="opacity-60 hover:opacity-100 transition-all"
      >
        {props.children}
      </a>
    </li>
  );
}
