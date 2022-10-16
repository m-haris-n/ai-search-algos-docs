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

const sections = [
  {
    heading: "Overview",
    link: "overview",
  },
  {
    heading: "Search Algorithm Terminologies",
    link: "terminology",
  },
];

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
            <ul className="p-0 pl-2 list-disc">
              {sections.map((section) => (
                <Li key={section.link} section={section.link}>
                  {section.heading}
                </Li>
              ))}
            </ul>
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
        <h1>Searches in Artificial Intelligence</h1>
        <section className="section">
          <Heading id={sections[0].link}>{sections[0].heading}</Heading>
          <div className="content">
            <Text>
              In Artificial Intelligence, Search techniques are universal
              problem-solving methods. Rational agents or Problem-solving agents
              in AI mostly used these search strategies or algorithms to solve a
              specific problem and provide the best result. Problem-solving
              agents are the goal-based agents and use atomic representation. In
              this topic, we will learn various problem-solving search
              algorithms.
            </Text>
          </div>
        </section>

        <section className="section">
          <Heading id={sections[1].link}>{sections[1].heading}</Heading>
          <div className="content">
            <Text>
              <ul>
                <li>
                  <strong>Search: </strong>Searching is a step by step procedure
                  to solve a search-problem in a given search space. A search
                  problem can have three main factors:
                  <ul>
                    <li>
                      <strong>Search Space: </strong>Search space represents a
                      set of possible solutions, which a system may have.
                    </li>
                    <li>
                      <strong>Start State: </strong> It is a state from where
                      agent begins <strong>the search.</strong>
                    </li>
                    <li>
                      <strong>Goal test: </strong>It is a function which observe
                      the current state and returns whether the goal state is
                      achieved or not.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Search tree: </strong>A tree representation of search
                  problem is called Search tree. The root of the search tree is
                  the root node which is corresponding to the initial state.
                </li>
                <li>
                  <strong>Actions: </strong> It gives the description of all the
                  available actions to the agent.
                </li>
                <li>
                  <strong>Transition model: </strong>A description of what each
                  action do, can be represented as a transition model.
                </li>
                <li>
                  <strong>Path Cost: </strong> It is a function which assigns a
                  numeric cost to each path.
                </li>
                <li>
                  <strong>Solution: </strong> It is an action sequence which
                  leads from the start node to the goal node.
                </li>
                <li>
                  <strong>Optimal Solution:</strong> If a solution has the
                  lowest cost among all solutions.
                </li>
              </ul>
            </Text>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
