import React from "react";
import { Prism } from "@mantine/prism";
import { useMantineColorScheme } from "@mantine/core";

import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";

const Code = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <Prism
        withLineNumbers
        language="python"
        getPrismTheme={(_theme, colorScheme) =>
          colorScheme === "light" ? vsLight : vsDark
        }
        className="code-area my-5"
      >
        {props.children}
      </Prism>
    </div>
  );
};

export default Code;
