const codes = {
  dfs: {
    cpp: `
// C++ program to print DFS traversal from
// a given vertex in a  given graph
#include <bits/stdc++.h>
using namespace std;
 
// Graph class represents a directed graph
// using adjacency list representation
class Graph {
public:
    map<int, bool> visited;
    map<int, list<int> > adj;
 
    // function to add an edge to graph
    void addEdge(int v, int w);
 
    // DFS traversal of the vertices
    // reachable from v
    void DFS(int v);
};
 
void Graph::addEdge(int v, int w)
{
    adj[v].push_back(w); // Add w to v’s list.
}
 
void Graph::DFS(int v)
{
    // Mark the current node as visited and
    // print it
    visited[v] = true;
    cout << v << " ";
 
    // Recur for all the vertices adjacent
    // to this vertex
    list<int>::iterator i;
    for (i = adj[v].begin(); i != adj[v].end(); ++i)
        if (!visited[*i])
            DFS(*i);
}
 
// Driver's code
int main()
{
    // Create a graph given in the above diagram
    Graph g;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
 
    cout << "Following is Depth First Traversal"
            " (starting from vertex 2) \n";
 
    // Function call
    g.DFS(2);
 
    return 0;
}
    `,
    python: `
    from collections import defaultdict
 
    # This class represents a directed graph using
    # adjacency list representation
     
     
    class Graph:
     
        # Constructor
        def __init__(self):
     
            # default dictionary to store graph
            self.graph = defaultdict(list)
     
        # function to add an edge to graph
        def addEdge(self, u, v):
            self.graph[u].append(v)
     
        # A function used by DFS
        def DFSUtil(self, v, visited):
     
            # Mark the current node as visited
            # and print it
            visited.add(v)
            print(v, end=' ')
     
            # Recur for all the vertices
            # adjacent to this vertex
            for neighbour in self.graph[v]:
                if neighbour not in visited:
                    self.DFSUtil(neighbour, visited)
     
        # The function to do DFS traversal. It uses
        # recursive DFSUtil()
        def DFS(self, v):
     
            # Create a set to store visited vertices
            visited = set()
     
            # Call the recursive helper function
            # to print DFS traversal
            self.DFSUtil(v, visited)
     
    # Driver's code
     
     
    # Create a graph given
    # in the above diagram
    if __name__ == "__main__":
        g = Graph()
        g.addEdge(0, 1)
        g.addEdge(0, 2)
        g.addEdge(1, 2)
        g.addEdge(2, 0)
        g.addEdge(2, 3)
        g.addEdge(3, 3)
     
        print("Following is DFS from (starting from vertex 2)")
        # Function call
        g.DFS(2)
    `,
    java: `
    import java.io.*;
    import java.util.*;
     
    // This class represents a
    // directed graph using adjacency
    // list representation
    class Graph {
        private int V; // No. of vertices
     
        // Array  of lists for
        // Adjacency List Representation
        private LinkedList<Integer> adj[];
     
        // Constructor
        @SuppressWarnings("unchecked") Graph(int v)
        {
            V = v;
            adj = new LinkedList[v];
            for (int i = 0; i < v; ++i)
                adj[i] = new LinkedList();
        }
     
        // Function to add an edge into the graph
        void addEdge(int v, int w)
        {
            adj[v].add(w); // Add w to v's list.
        }
     
        // A function used by DFS
        void DFSUtil(int v, boolean visited[])
        {
            // Mark the current node as visited and print it
            visited[v] = true;
            System.out.print(v + " ");
     
            // Recur for all the vertices adjacent to this
            // vertex
            Iterator<Integer> i = adj[v].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n])
                    DFSUtil(n, visited);
            }
        }
     
        // The function to do DFS traversal.
        // It uses recursive
        // DFSUtil()
        void DFS(int v)
        {
            // Mark all the vertices as
            // not visited(set as
            // false by default in java)
            boolean visited[] = new boolean[V];
     
            // Call the recursive helper
            // function to print DFS
            // traversal
            DFSUtil(v, visited);
        }
     
        // Driver's Code
        public static void main(String args[])
        {
            Graph g = new Graph(4);
     
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(1, 2);
            g.addEdge(2, 0);
            g.addEdge(2, 3);
            g.addEdge(3, 3);
     
            System.out.println(
                "Following is Depth First Traversal "
                + "(starting from vertex 2)");
     
            // Function call
            g.DFS(2);
        }
    }
    `,
  },
};

export { codes };
