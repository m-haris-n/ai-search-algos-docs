import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { Prism } from "@mantine/prism";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import Li from "./Li";
import Heading from "./Heading";
import Code from "./Code";

const code = `def median(pool):
  '''Statistical median to demonstrate doctest.
  >>> median([2, 9, 9, 7, 9, 2, 4, 5, 8])
  7
  '''
  copy = sorted(pool)
  size = len(copy)
  if size % 2 == 1:
      return copy[(size - 1) / 2]
  else:
      return (copy[size/2 - 1] + copy[size/2]) / 2
if __name__ == '__main__':
  import doctest
  doctest.testmod()`;

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <ScrollArea>
            <ol>
              <Li>Link</Li>
            </ol>
          </ScrollArea>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <h1 className="text-2xl font-semibold px-5">Searches in AI</h1>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </div>
        </Header>
      }
    >
      <div className="">
        <Heading id="heading1">Heading 1</Heading>

        <Code>{code}</Code>
      </div>
    </AppShell>
  );
}
