import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import AppShell from "./components/AppShell";
// import Prism from 'prismjs';

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

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

function App() {
  const [count, setCount] = useState(0);
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => {
    console.log(colorScheme);
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <AppShell></AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
