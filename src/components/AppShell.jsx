import { Children, useState } from "react";
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
  Tabs,
  ScrollArea,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { Prism } from "@mantine/prism";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import Li from "./Li";
import Heading from "./Heading";
import Code from "./Code";
import Strong from "./Strong";
import logo from "../assets/logo.png";
import Subheading from "./Subheading";
import Pseudocode from "./Pseudocode";
import CodeTabs from "./CodeTabs";
import { codes } from "../data/codes";
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
    children: [],
  },
  {
    heading: "Search Algorithm Terminologies",
    link: "terminology",
    children: [],
  },
  {
    heading: "Properties of Search Algorithms",
    link: "properties",
    children: [],
  },
  {
    heading: "Types of Search Algorithms",
    link: "types-of-search-algos",
    children: [],
  },
  {
    heading: "Non-heuristic Algorithms",
    link: "non-heuristic",
    children: [
      { heading: "Depth First Search", link: "dfs" },
      { heading: "Breadth First Search", link: "bfs" },
      { heading: "Uniform Cost Search", link: "ucs" },
    ],
  },
  {
    heading: "Heuristic Algorithms",
    link: "heuristic",
    children: [
      { heading: "Best First Search", link: "befs" },
      { heading: "A* Search", link: "astar" },
      { heading: "Greedy Search", link: "greedy" },
    ],
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
          width: "100%",
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
                <>
                  <Li key={section.link} section={section.link}>
                    {section.heading}
                  </Li>
                  <ul className="list-disc">
                    {section.children.map((child) => (
                      <Li key={child.link} section={child.link}>
                        {child.heading}
                      </Li>
                    ))}
                  </ul>
                </>
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
            <div className="flex flex-row items-center">
              <img src={logo} alt="" width={48} />
              <h1 className="text-2xl font-semibold px-5">
                Search Algorithms | AI
              </h1>
            </div>
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
        <h1>Search Algorithms in Artificial Intelligence</h1>
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
                  <Strong>Search: </Strong>Searching is a step by step procedure
                  to solve a search-problem in a given search space. A search
                  problem can have three main factors:
                  <ul className="list-disc">
                    <li>
                      <Strong>Search Space: </Strong>Search space represents a
                      set of possible solutions, which a system may have.
                    </li>
                    <li>
                      <Strong>Start State: </Strong> It is a state from where
                      agent begins <Strong>the search.</Strong>
                    </li>
                    <li>
                      <Strong>Goal test: </Strong>It is a function which observe
                      the current state and returns whether the goal state is
                      achieved or not.
                    </li>
                  </ul>
                </li>
                <li>
                  <Strong>Search tree: </Strong>A tree representation of search
                  problem is called Search tree. The root of the search tree is
                  the root node which is corresponding to the initial state.
                </li>
                <li>
                  <Strong>Actions: </Strong> It gives the description of all the
                  available actions to the agent.
                </li>
                <li>
                  <Strong>Transition model: </Strong>A description of what each
                  action do, can be represented as a transition model.
                </li>
                <li>
                  <Strong>Path Cost: </Strong> It is a function which assigns a
                  numeric cost to each path.
                </li>
                <li>
                  <Strong>Solution: </Strong> It is an action sequence which
                  leads from the start node to the goal node.
                </li>
                <li>
                  <Strong>Optimal Solution:</Strong> If a solution has the
                  lowest cost among all solutions.
                </li>
              </ul>
            </Text>
          </div>
        </section>
        <section className="section">
          <Heading id={sections[2].link}>{sections[2].heading}</Heading>
          <div className="content">
            <Text>
              Following are the four essential properties of search algorithms
              to compare the efficiency of these algorithms:
              <ul>
                <li>
                  <Strong>Completeness:</Strong> A search algorithm is said to
                  be complete if it guarantees to return a solution if at least
                  any solution exists for any random input.
                </li>
                <li>
                  <Strong>Optimality: </Strong>If a solution found for an
                  algorithm is guaranteed to be the best solution {"("}lowest
                  path cost{")"} among all other solutions, then such a solution
                  for is said to be an optimal solution.
                </li>
                <li>
                  <Strong>Time Complexity: </Strong>Time complexity is a measure
                  of time for an algorithm to complete its task.
                </li>
                <li>
                  <Strong>Space Complexity: </Strong>It is the maximum storage
                  space required at any point during the search, as the
                  complexity of the problem.
                </li>
              </ul>
            </Text>
          </div>
        </section>
        <section className="section">
          <Heading id={sections[3].link}>{sections[3].heading}</Heading>
          <div className="content">
            <Text className="font-semibold">
              Based on the search problems we can classify the search algorithms
              into:
            </Text>
            <ul>
              <li>
                <Strong>Uninformed </Strong> (Non-heuristic) Search
              </li>
              <li>
                <Strong>Informed</Strong> (Heuristic) Search
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
          <Heading id={sections[4].link}>{sections[4].heading}</Heading>
          <div className="content">
            <Text>
              The uninformed search does not contain any domain knowledge such
              as closeness, the location of the goal. It operates in a
              brute-force way as it only includes information about how to
              traverse the tree and how to identify leaf and goal nodes.
              Uninformed search applies a way in which search tree is searched
              without any information about the search space like initial state
              operators and test for the goal, so it is also called blind
              search.It examines each node of the tree until it achieves the
              goal node.
              <br />
              <p className="font-semibold">It's main types are:</p>
              <ul className="list-disc">
                {sections[4].children.map((child) => (
                  <li>
                    <a href={"#" + child.link}>{child.heading}</a>
                  </li>
                ))}
              </ul>
            </Text>
            <section>
              <Subheading id={sections[4].children[0].link}>
                {sections[4].children[0].heading}
              </Subheading>
              <Text>
                Depth first Search or Depth first traversal is a recursive
                algorithm for searching all the vertices of a graph or tree data
                structure. Traversal means visiting all the nodes of a graph.
                <br />A standard DFS implementation puts each vertex of the
                graph into one of two categories:
                <ol className="list-decimal">
                  <li>Visited</li>
                  <li>Not visited</li>
                </ol>
                The purpose of the algorithm is to mark each vertex as visited
                while avoiding cycles.
                <br />
                The DFS algorithm works as follows:
                <div className="code-area">
                  <ol className="list-decimal">
                    <li>
                      Start by putting any one of the graph's vertices on top of
                      a stack.
                    </li>
                    <li>
                      Take the top item of the stack and add it to the visited
                      list.
                    </li>
                    <li>
                      Create a list of that vertex's adjacent nodes. Add the
                      ones which aren't in the visited list to the top of the
                      stack.
                    </li>
                    <li>
                      Keep repeating steps 2 and 3 until the stack is empty.
                    </li>
                  </ol>
                </div>
                <p className="inner-heading">Pseudocode:</p>
                <Pseudocode>
                  procedure DFS_iterative(G, v) is <br />
                  {"   "}let S be a stack <br />
                  {"   "}S.push(v) <br />
                  {"   "}while S is not empty do <br />
                  {"   "}
                  {"   "}v = S.pop() <br />
                  {"   "}
                  {"   "}if v is not labeled as discovered then <br />
                  {"   "}
                  {"   "}
                  {"   "}label v as discovered <br />
                  {"   "}
                  {"   "}
                  {"   "}for all edges from v to w in G.adjacentEdges(v) do{" "}
                  <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "} S.push(w)
                </Pseudocode>
                <p className="inner-heading">Implementations:</p>
                <CodeTabs
                  cpp={codes.dfs.cpp}
                  python={codes.dfs.python}
                  java={codes.dfs.java}
                />
                <p className="inner-heading">Applications:</p>
                <ul className="list-disc">
                  <li>Finding connected components.</li>
                  <li>Topological sorting.</li>
                  <li>Finding the bridges of a graph.</li>
                  <li>Maze generation may use a randomized DFS.</li>
                  <li>Planarity testing.</li>
                </ul>
              </Text>
            </section>

            <section className="">
              <Subheading id={sections[4].children[1].link}>
                {sections[4].children[1].heading}
              </Subheading>
              <Text>
                Breadth-first search (BFS) is an algorithm for searching a tree
                data structure for a node that satisfies a given property. It
                starts at the tree root and explores all nodes at the present
                depth prior to moving on to the nodes at the next depth level.
                Extra memory, usually a queue, is needed to keep track of the
                child nodes that were encountered but not yet explored.
                <br />A standard BFS implementation puts each vertex of the
                graph into one of two categories:
                <ol className="list-decimal">
                  <li>Visited</li>
                  <li>Not visited</li>
                </ol>
                The purpose of the algorithm is to mark each vertex as visited
                while avoiding cycles.
                <br />
                The BFS algorithm works as follows:
                <div className="code-area">
                  <ol className="list-decimal">
                    <li>
                      Start by putting any one of the graph's vertices at the
                      back of a queue.
                    </li>
                    <li>
                      Take the front item of the queue and add it to the visited
                      list.
                    </li>
                    <li>
                      Create a list of that vertex's adjacent nodes. Add the
                      ones which aren't in the visited list to the back of the
                      queue.
                    </li>
                    <li>
                      Keep repeating steps 2 and 3 until the queue is empty.
                    </li>
                  </ol>
                </div>
                <p className="inner-heading">Pseudocode:</p>
                <Pseudocode>
                  procedure BFS(G, root) is <br />
                  {"   "}let Q be a queue <br />
                  {"   "}label root as explored <br />
                  {"   "}Q.enqueue(root) <br />
                  {"   "}while Q is not empty do <br />
                  {"   "}
                  {"   "}v := Q.dequeue() <br />
                  {"   "}
                  {"   "}if v is the goal then <br />
                  {"   "}
                  {"   "}
                  {"   "}return v{"   "} <br />
                  {"   "}for all edges from v to w in G.adjacentEdges(v) do{" "}
                  <br />
                  {"   "}
                  {"   "}
                  {"   "}if w is not labeled as explored then <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}label w as explored <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}Q.enqueue(w)
                </Pseudocode>
                <p className="inner-heading">Implementations:</p>
                <CodeTabs
                  cpp={codes.bfs.cpp}
                  python={codes.bfs.python}
                  java={codes.bfs.java}
                />
                <p className="inner-heading">Applications:</p>
                <ul className="list-disc">
                  <li>Copying garbage collection, Cheney's algorithm</li>
                  <li>
                    Finding the shortest path between two nodes u and v, with
                    path length measured by number of edges (an advantage over
                    depth-first search)
                  </li>
                  <li>
                    Ford–Fulkerson method for computing the maximum flow in a
                    flow network
                  </li>
                  <li>
                    Serialization/Deserialization of a binary tree vs
                    serialization in sorted order, allows the tree to be
                    re-constructed in an efficient manner.
                  </li>
                  <li>
                    Implementing parallel algorithms for computing a graph's
                    transitive closure.
                  </li>
                </ul>
              </Text>
            </section>
            <section>
              <Subheading id={sections[4].children[2].link}>
                {sections[4].children[2].heading}
              </Subheading>
              <Text>
                Uniform-Cost Search is a variant of Dijikstra’s algorithm. Here,
                instead of inserting all vertices into a priority queue, we
                insert only source, then one by one insert when needed. In every
                step, we check if the item is already in priority queue (using
                visited array). If yes, we perform decrease key, else we insert
                it. This variant of Dijkstra is useful for infinite graphs and
                those graph which are too large to represent in the memory.
                Uniform-Cost Search is mainly used in Artificial Intelligence.
                <p className="inner-heading">Pseudocode:</p>
                <Pseudocode>
                  procedure uniform_cost_search(start) is node ← start frontier{" "}
                  <br />← priority queue containing node only expanded ← empty
                  set do <br />
                  {"   "}if frontier is empty then <br />
                  {"   "}
                  {"   "}return failure <br />
                  {"   "}node ← frontier.pop() <br />
                  {"   "}if node is a goal state then <br />
                  {"   "}
                  {"   "}return solution(node) <br />
                  {"   "}expanded.add(node) <br />
                  {"   "}for each of node's neighbors n do <br />
                  {"   "}
                  {"   "}if n is not in expanded and not in frontier then <br />
                  {"   "}
                  {"   "}
                  {"   "}frontier.add(n) <br />
                  {"   "}
                  {"   "}else if n is in frontier with higher cost
                  {"   "}
                  {"   "}
                  {"   "}replace existing node with n
                </Pseudocode>
                <p className="inner-heading">Implementations:</p>
                <CodeTabs
                  cpp={codes.ucs.cpp}
                  python={codes.ucs.python}
                  java={codes.ucs.java}
                />
                <p className="inner-heading">Applications:</p>
                <ul className="list-disc">
                  <li>
                    Least-cost paths are calculated for instance to establish
                    tracks of electricity lines or oil pipelines. The algorithm
                    has also been used to calculate optimal long-distance
                    footpaths in Ethiopia and contrast them with the situation
                    on the ground.
                  </li>
                </ul>
              </Text>
            </section>
          </div>
        </section>
        <section className="section">
          <Heading id={sections[5].link}>{sections[5].heading}</Heading>
          <div className="content">
            <Text>
              Informed search algorithms use domain knowledge. In an informed
              search, problem information is available which can guide the
              search. Informed search strategies can find a solution more
              efficiently than an uninformed search strategy. Informed search is
              also called a Heuristic search. A heuristic is a way which might
              not always be guaranteed for best solutions but guaranteed to find
              a good solution in reasonable time. Informed search can solve much
              complex problem which could not be solved in another way. An
              example of informed search algorithms is a traveling salesman
              problem.
              <br />
              <p className="font-semibold">It's main types are:</p>
              <ul className="list-disc">
                {sections[5].children.map((child) => (
                  <li>
                    <a href={"#" + child.link}>{child.heading}</a>
                  </li>
                ))}
              </ul>
            </Text>
            <section>
              <Subheading id={sections[5].children[0].link}>
                {sections[5].children[0].heading}
              </Subheading>
              <Text>
                We use a priority queue or heap to store the costs of nodes that
                have the lowest evaluation function value. So the implementation
                is a variation of BFS, we just need to change Queue to
                PriorityQueue.
                <p className="inner-heading">Pseudocode:</p>
                <Pseudocode>
                  procedure GBS(start, target) is: <br />
                  {"   "}mark start as visited <br />
                  {"   "}add start to queue <br />
                  {"   "}while queue is not empty do: <br />
                  {"   "}
                  {"   "}current_node ← vertex of queue with min distance to{" "}
                  <br />
                  target <br />
                  {"   "}
                  {"   "}remove current_node from queue <br />
                  {"   "}
                  {"   "}foreach neighbor n of current_node do: <br />
                  {"   "}
                  {"   "}
                  {"   "}if n not in visited then: <br />
                  {"   "}
                  {"   "}
                  {"   "}if n is target: <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}return n{"   "} <br />
                  {"   "}
                  {"   "}else: <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}mark n as visited <br />
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}add n to queue <br />
                  {"   "}return failure <br />
                </Pseudocode>
                <p className="inner-heading">Implementaions:</p>
                <CodeTabs
                  cpp={codes.befs.cpp}
                  java={codes.befs.java}
                  python={codes.befs.python}
                />
              </Text>
            </section>
            <section>
              <Subheading id={sections[5].children[1].link}>
                {sections[5].children[1].heading}
              </Subheading>
              <Text></Text>
            </section>
            <section>
              <Subheading id={sections[5].children[2].link}>
                {sections[5].children[2].heading}
              </Subheading>
              <Text></Text>
            </section>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
