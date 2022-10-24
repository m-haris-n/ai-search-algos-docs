import { IconLink } from "@tabler/icons";

import React from "react";

const Subheading = (props) => {
  const id = props.id ? props.id : "";
  return (
    <div
      className="flex flex-row items-center my-4 pt-[70px] mt-[-30px]"
      id={id}
    >
      <a href={"#" + id}>
        <IconLink className="mr-1 opacity-50 hover:opacity-100 hover:cursor-pointer" />
      </a>
      <h2 className="text-[22px] font">{props.children}</h2>
    </div>
  );
};

export default Subheading;
