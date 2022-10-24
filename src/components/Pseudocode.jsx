import React from "react";
import { ScrollArea } from "@mantine/core";
const Pseudocode = (props) => {
  return (
    <pre className="code-area">
      <ScrollArea>{props.children}</ScrollArea>
    </pre>
  );
};

export default Pseudocode;
