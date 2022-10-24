import React from "react";
import { Prism } from "@mantine/prism";
import { ScrollArea } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
export default function CodeTabs(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Prism.Tabs
      defaultValue={"cpp"}
      withLineNumbers
      language="python"
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === "light" ? vsLight : vsDark
      }
      className="py-5"
    >
      <Prism.TabsList>
        <Prism.Tab value="cpp">C++</Prism.Tab>
        <Prism.Tab value="python">Python</Prism.Tab>
        <Prism.Tab value="java">JAVA</Prism.Tab>
      </Prism.TabsList>
      <ScrollArea className="max-h-[500px] border-b-[1px]">
        <Prism.Panel value="cpp" language="cpp">
          {props.cpp}
        </Prism.Panel>
        <Prism.Panel value="python" language="python">
          {props.python}
        </Prism.Panel>
        <Prism.Panel value="java" language="java">
          {props.java}
        </Prism.Panel>
      </ScrollArea>
    </Prism.Tabs>
  );
}
