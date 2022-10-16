import { IconLink } from "@tabler/icons";

import React from "react";

const Heading = (props) => {
  return (
    <div
      className="flex flex-row items-center hover:last:invisible"
      id={props.id}
    >
      <a href={"#" + props.id}></a>
      <IconLink className="mr-1 opacity-50 hover:opacity-100 hover:cursor-pointer" />
      <h1>{props.children}</h1>
    </div>
  );
};

export default Heading;
