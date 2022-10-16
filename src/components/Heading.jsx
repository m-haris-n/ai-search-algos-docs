import { IconLink } from "@tabler/icons";

import React from "react";

const Heading = (props) => {
  const id = props.id ? props.id : "";
  return (
    <div className="flex flex-row items-center my-4" id={id}>
      <a href={"#" + id}>
        <IconLink className="mr-1 opacity-50 hover:opacity-100 hover:cursor-pointer" />
      </a>
      <h2 className="text-2xl">{props.children}</h2>
    </div>
  );
};

export default Heading;
