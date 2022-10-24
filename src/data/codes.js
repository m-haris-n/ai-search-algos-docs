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
  bfs: {
    cpp: `
    #include<bits/stdc++.h>
    using namespace std;
     
    // This class represents a directed graph using
    // adjacency list representation
    class Graph
    {
        int V;    // No. of vertices
     
        // Pointer to an array containing adjacency
        // lists
        vector<list<int>> adj;  
    public:
        Graph(int V);  // Constructor
     
        // function to add an edge to graph
        void addEdge(int v, int w);
     
        // prints BFS traversal from a given source s
        void BFS(int s); 
    };
     
    Graph::Graph(int V)
    {
        this->V = V;
        adj.resize(V);
    }
     
    void Graph::addEdge(int v, int w)
    {
        adj[v].push_back(w); // Add w to v’s list.
    }
     
    void Graph::BFS(int s)
    {
        // Mark all the vertices as not visited
        vector<bool> visited;
        visited.resize(V,false);
     
        // Create a queue for BFS
        list<int> queue;
     
        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.push_back(s);
     
        while(!queue.empty())
        {
            // Dequeue a vertex from queue and print it
            s = queue.front();
            cout << s << " ";
            queue.pop_front();
     
            // Get all adjacent vertices of the dequeued
            // vertex s. If a adjacent has not been visited,
            // then mark it visited and enqueue it
            for (auto adjecent: adj[s])
            {
                if (!visited[adjecent])
                {
                    visited[adjecent] = true;
                    queue.push_back(adjecent);
                }
            }
        }
    }
     
    // Driver program to test methods of graph class
    int main()
    {
        // Create a graph given in the above diagram
        Graph g(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
     
        cout << "Following is Breadth First Traversal "
             << "(starting from vertex 2) \n";
        g.BFS(2);
     
        return 0;
    }    
`,
    python: `
    # Python3 Program to print BFS traversal
    # from a given source vertex. BFS(int s)
    # traverses vertices reachable from s.
    from collections import defaultdict
     
    # This class represents a directed graph
    # using adjacency list representation
    class Graph:
     
        # Constructor
        def __init__(self):
     
            # default dictionary to store graph
            self.graph = defaultdict(list)
     
        # function to add an edge to graph
        def addEdge(self,u,v):
            self.graph[u].append(v)
     
        # Function to print a BFS of graph
        def BFS(self, s):
     
            # Mark all the vertices as not visited
            visited = [False] * (max(self.graph) + 1)
     
            # Create a queue for BFS
            queue = []
     
            # Mark the source node as
            # visited and enqueue it
            queue.append(s)
            visited[s] = True
     
            while queue:
     
                # Dequeue a vertex from
                # queue and print it
                s = queue.pop(0)
                print (s, end = " ")
     
                # Get all adjacent vertices of the
                # dequeued vertex s. If a adjacent
                # has not been visited, then mark it
                # visited and enqueue it
                for i in self.graph[s]:
                    if visited[i] == False:
                        queue.append(i)
                        visited[i] = True
     
    # Driver code
     
    # Create a graph given in
    # the above diagram
    g = Graph()
    g.addEdge(0, 1)
    g.addEdge(0, 2)
    g.addEdge(1, 2)
    g.addEdge(2, 0)
    g.addEdge(2, 3)
    g.addEdge(3, 3)
     
    print ("Following is Breadth First Traversal"
                      " (starting from vertex 2)")
    g.BFS(2)
     
    # This code is contributed by Neelam Yadav
    `,
    java: `
    import java.io.*;
    import java.util.*;
     
    // This class represents a directed graph using adjacency list
    // representation
    class Graph
    {
        private int V;   // No. of vertices
        private LinkedList<Integer> adj[]; //Adjacency Lists
     
        // Constructor
        Graph(int v)
        {
            V = v;
            adj = new LinkedList[v];
            for (int i=0; i<v; ++i)
                adj[i] = new LinkedList();
        }
     
        // Function to add an edge into the graph
        void addEdge(int v,int w)
        {
            adj[v].add(w);
        }
     
        // prints BFS traversal from a given source s
        void BFS(int s)
        {
            // Mark all the vertices as not visited(By default
            // set as false)
            boolean visited[] = new boolean[V];
     
            // Create a queue for BFS
            LinkedList<Integer> queue = new LinkedList<Integer>();
     
            // Mark the current node as visited and enqueue it
            visited[s]=true;
            queue.add(s);
     
            while (queue.size() != 0)
            {
                // Dequeue a vertex from queue and print it
                s = queue.poll();
                System.out.print(s+" ");
     
                // Get all adjacent vertices of the dequeued vertex s
                // If a adjacent has not been visited, then mark it
                // visited and enqueue it
                Iterator<Integer> i = adj[s].listIterator();
                while (i.hasNext())
                {
                    int n = i.next();
                    if (!visited[n])
                    {
                        visited[n] = true;
                        queue.add(n);
                    }
                }
            }
        }
     
        // Driver method to
        public static void main(String args[])
        {
            Graph g = new Graph(4);
     
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(1, 2);
            g.addEdge(2, 0);
            g.addEdge(2, 3);
            g.addEdge(3, 3);
     
            System.out.println("Following is Breadth First Traversal "+
                               "(starting from vertex 2)");
     
            g.BFS(2);
        }
    }
    // This code is contributed by Aakash Hasija
    `,
  },
  ucs: {
    cpp: `
    // C++ implementation of above approach
    #include <bits/stdc++.h>
    using namespace std;
    
    // graph
    vector<vector<int> > graph;
    
    // map to store cost of edges
    map<pair<int, int>, int> cost;
    
    // returns the minimum cost in a vector( if
    // there are multiple goal states)
    vector<int> uniform_cost_search(vector<int> goal, int start)
    {
        // minimum cost upto
        // goal state from starting
        // state
        vector<int> answer;
    
        // create a priority queue
        priority_queue<pair<int, int> > queue;
    
        // set the answer vector to max value
        for (int i = 0; i < goal.size(); i++)
            answer.push_back(INT_MAX);
    
        // insert the starting index
        queue.push(make_pair(0, start));
    
        // map to store visited node
        map<int, int> visited;
    
        // count
        int count = 0;
    
        // while the queue is not empty
        while (queue.size() > 0) {
    
            // get the top element of the
            // priority queue
            pair<int, int> p = queue.top();
    
            // pop the element
            queue.pop();
    
            // get the original value
            p.first *= -1;
    
            // check if the element is part of
            // the goal list
            if (find(goal.begin(), goal.end(), p.second) != goal.end()) {
    
                // get the position
                int index = find(goal.begin(), goal.end(),
                                p.second) - goal.begin();
    
                // if a new goal is reached
                if (answer[index] == INT_MAX)
                    count++;
    
                // if the cost is less
                if (answer[index] > p.first)
                    answer[index] = p.first;
    
                // pop the element
                queue.pop();
    
                // if all goals are reached
                if (count == goal.size())
                    return answer;
            }
    
            // check for the non visited nodes
            // which are adjacent to present node
            if (visited[p.second] == 0)
                for (int i = 0; i < graph[p.second].size(); i++) {
    
                    // value is multiplied by -1 so that
                    // least priority is at the top
                    queue.push(make_pair((p.first +
                    cost[make_pair(p.second, graph[p.second][i])]) * -1,
                    graph[p.second][i]));
                }
    
            // mark as visited
            visited[p.second] = 1;
        }
    
        return answer;
    }
    
    // main function
    int main()
    {
        // create the graph
        graph.resize(7);
    
        // add edge
        graph[0].push_back(1);
        graph[0].push_back(3);
        graph[3].push_back(1);
        graph[3].push_back(6);
        graph[3].push_back(4);
        graph[1].push_back(6);
        graph[4].push_back(2);
        graph[4].push_back(5);
        graph[2].push_back(1);
        graph[5].push_back(2);
        graph[5].push_back(6);
        graph[6].push_back(4);
    
        // add the cost
        cost[make_pair(0, 1)] = 2;
        cost[make_pair(0, 3)] = 5;
        cost[make_pair(1, 6)] = 1;
        cost[make_pair(3, 1)] = 5;
        cost[make_pair(3, 6)] = 6;
        cost[make_pair(3, 4)] = 2;
        cost[make_pair(2, 1)] = 4;
        cost[make_pair(4, 2)] = 4;
        cost[make_pair(4, 5)] = 3;
        cost[make_pair(5, 2)] = 6;
        cost[make_pair(5, 6)] = 3;
        cost[make_pair(6, 4)] = 7;
    
        // goal state
        vector<int> goal;
    
        // set the goal
        // there can be multiple goal states
        goal.push_back(6);
    
        // get the answer
        vector<int> answer = uniform_cost_search(goal, 0);
    
        // print the answer
        cout << "Minimum cost from 0 to 6 is = "
            << answer[0] << endl;
    
        return 0;
    }
    
    `,
    python: `
    # Python3 implementation of above approach

    # returns the minimum cost in a vector( if
    # there are multiple goal states)
    def uniform_cost_search(goal, start):
        
        # minimum cost upto
        # goal state from starting
        global graph,cost
        answer = []
    
        # create a priority queue
        queue = []
    
        # set the answer vector to max value
        for i in range(len(goal)):
            answer.append(10**8)
    
        # insert the starting index
        queue.append([0, start])
    
        # map to store visited node
        visited = {}
    
        # count
        count = 0
    
        # while the queue is not empty
        while (len(queue) > 0):
    
            # get the top element of the
            queue = sorted(queue)
            p = queue[-1]
    
            # pop the element
            del queue[-1]
    
            # get the original value
            p[0] *= -1
    
            # check if the element is part of
            # the goal list
            if (p[1] in goal):
    
                # get the position
                index = goal.index(p[1])
    
                # if a new goal is reached
                if (answer[index] == 10**8):
                    count += 1
    
                # if the cost is less
                if (answer[index] > p[0]):
                    answer[index] = p[0]
    
                # pop the element
                del queue[-1]
    
                queue = sorted(queue)
                if (count == len(goal)):
                    return answer
    
            # check for the non visited nodes
            # which are adjacent to present node
            if (p[1] not in visited):
                for i in range(len(graph[p[1]])):
    
                    # value is multiplied by -1 so that
                    # least priority is at the top
                    queue.append( [(p[0] + cost[(p[1], graph[p[1]][i])])* -1, graph[p[1]][i]])
    
            # mark as visited
            visited[p[1]] = 1
    
        return answer
    
    # main function
    if __name__ == '__main__':
        
        # create the graph
        graph,cost = [[] for i in range(8)],{}
    
        # add edge
        graph[0].append(1)
        graph[0].append(3)
        graph[3].append(1)
        graph[3].append(6)
        graph[3].append(4)
        graph[1].append(6)
        graph[4].append(2)
        graph[4].append(5)
        graph[2].append(1)
        graph[5].append(2)
        graph[5].append(6)
        graph[6].append(4)
    
        # add the cost
        cost[(0, 1)] = 2
        cost[(0, 3)] = 5
        cost[(1, 6)] = 1
        cost[(3, 1)] = 5
        cost[(3, 6)] = 6
        cost[(3, 4)] = 2
        cost[(2, 1)] = 4
        cost[(4, 2)] = 4
        cost[(4, 5)] = 3
        cost[(5, 2)] = 6
        cost[(5, 6)] = 3
        cost[(6, 4)] = 7
    
        # goal state
        goal = []
    
        # set the goal
        # there can be multiple goal states
        goal.append(6)
    
        # get the answer
        answer = uniform_cost_search(goal, 0)
    
        # print the answer
        print("Minimum cost from 0 to 6 is = ",answer[0])
    
    # This code is contributed by mohit kumar 29
    
    `,
    java: `
No Code Available :(
    `,
  },
  befs: {
    cpp: `
    // C++ program to implement Best First Search using priority
    // queue
    #include <bits/stdc++.h>
    using namespace std;
    typedef pair<int, int> pi;
    
    vector<vector<pi> > graph;
    
    // Function for adding edges to graph
    void addedge(int x, int y, int cost)
    {
        graph[x].push_back(make_pair(cost, y));
        graph[y].push_back(make_pair(cost, x));
    }
    
    // Function For Implementing Best First Search
    // Gives output path having lowest cost
    void best_first_search(int actual_Src, int target, int n)
    {
        vector<bool> visited(n, false);
        // MIN HEAP priority queue
        priority_queue<pi, vector<pi>, greater<pi> > pq;
        // sorting in pq gets done by first value of pair
        pq.push(make_pair(0, actual_Src));
        int s = actual_Src;
        visited[s] = true;
        while (!pq.empty()) {
            int x = pq.top().second;
            // Displaying the path having lowest cost
            cout << x << " ";
            pq.pop();
            if (x == target)
                break;
    
            for (int i = 0; i < graph[x].size(); i++) {
                if (!visited[graph[x][i].second]) {
                    visited[graph[x][i].second] = true;
                    pq.push(make_pair(graph[x][i].first,graph[x][i].second));
                }
            }
        }
    }
    
    // Driver code to test above methods
    int main()
    {
        // No. of Nodes
        int v = 14;
        graph.resize(v);
    
        // The nodes shown in above example(by alphabets) are
        // implemented using integers addedge(x,y,cost);
        addedge(0, 1, 3);
        addedge(0, 2, 6);
        addedge(0, 3, 5);
        addedge(1, 4, 9);
        addedge(1, 5, 8);
        addedge(2, 6, 12);
        addedge(2, 7, 14);
        addedge(3, 8, 7);
        addedge(8, 9, 5);
        addedge(8, 10, 6);
        addedge(9, 11, 1);
        addedge(9, 12, 10);
        addedge(9, 13, 2);
    
        int source = 0;
        int target = 9;
    
        // Function call
        best_first_search(source, target, v);
    
        return 0;
    }
    
    `,
    python: `
    from queue import PriorityQueue
    v = 14
    graph = [[] for i in range(v)]
    
    # Function For Implementing Best First Search
    # Gives output path having lowest cost
    
    
    def best_first_search(actual_Src, target, n):
        visited = [False] * n
        pq = PriorityQueue()
        pq.put((0, actual_Src))
        visited[actual_Src] = True
        
        while pq.empty() == False:
            u = pq.get()[1]
            # Displaying the path having lowest cost
            print(u, end=" ")
            if u == target:
                break
    
            for v, c in graph[u]:
                if visited[v] == False:
                    visited[v] = True
                    pq.put((c, v))
        print()
    
    # Function for adding edges to graph
    
    
    def addedge(x, y, cost):
        graph[x].append((y, cost))
        graph[y].append((x, cost))
    
    
    # The nodes shown in above example(by alphabets) are
    # implemented using integers addedge(x,y,cost);
    addedge(0, 1, 3)
    addedge(0, 2, 6)
    addedge(0, 3, 5)
    addedge(1, 4, 9)
    addedge(1, 5, 8)
    addedge(2, 6, 12)
    addedge(2, 7, 14)
    addedge(3, 8, 7)
    addedge(8, 9, 5)
    addedge(8, 10, 6)
    addedge(9, 11, 1)
    addedge(9, 12, 10)
    addedge(9, 13, 2)
    
    source = 0
    target = 9
    best_first_search(source, target, v)
    
    # This code is contributed by Jyotheeswar Ganne
    
    `,
    java: `
    // Java program to implement Best First Search using priority
    // queue
    import java.util.ArrayList;
    import java.util.PriorityQueue;
    
    class GFG
    {
    static ArrayList<ArrayList<edge> > adj = new ArrayList<>();
    
    // Function for adding edges to graph
    static class edge implements Comparable<edge>
    {
        int v, cost;
        edge(int v, int cost)
        {
        this.v = v;
        this.cost = cost;
        }
        @Override public int compareTo(edge o)
        {
        if (o.cost < cost) {
            return 1;
        }
        else
            return -1;
        }
    }
    
    public GFG(int v)
    {
        for (int i = 0; i < v; i++) {
        adj.add(new ArrayList<>());
        }
    }
    
    // Function For Implementing Best First Search
    // Gives output path having lowest cost
    static void best_first_search(int source, int target, int v)
    {
    
        // MIN HEAP priority queue
        PriorityQueue<edge> pq = new PriorityQueue<>();
        boolean visited[] = new boolean[v];
        visited = true;
    
        // sorting in pq gets done by first value of pair
        pq.add(new edge(source, -1));
        while (!pq.isEmpty()) {
        int x = pq.poll().v;
    
        // Displaying the path having lowest cost
        System.out.print(x + " ");
        if (target == x) {
            break;
        }
        for (edge adjacentNodeEdge : adj.get(x)) {
            if (!visited[adjacentNodeEdge.v]) {
            visited[adjacentNodeEdge.v] = true;
            pq.add(adjacentNodeEdge);
            }
        }
        }
    }
    void addedge(int u, int v, int cost)
    {
        adj.get(u).add(new edge(v, cost));
        adj.get(v).add(new edge(u, cost));
    }
    
    // Driver code to test above methods
    public static void main(String args[])
    {
    
        // No. of Nodes
        int v = 14;
    
        // The nodes shown in above example(by alphabets) are
        // implemented using integers addedge(x,y,cost);
        GFG graph = new GFG(v);
        graph.addedge(0, 1, 3);
        graph.addedge(0, 2, 6);
        graph.addedge(0, 3, 5);
        graph.addedge(1, 4, 9);
        graph.addedge(1, 5, 8);
        graph.addedge(2, 6, 12);
        graph.addedge(2, 7, 14);
        graph.addedge(3, 8, 7);
        graph.addedge(8, 9, 5);
        graph.addedge(8, 10, 6);
        graph.addedge(9, 11, 1);
        graph.addedge(9, 12, 10);
        graph.addedge(9, 13, 2);
    
        int source = 0;
        int target = 9;
    
        // Function call
        best_first_search(source, target, v);
    }
    }
    
    // This code is contributed by Prithi_Dey
    
    `,
  },
  astar: {
    cpp: `
// A C++ Program to implement A* Search Algorithm
#include "math.h"
#include <array>
#include <chrono>
#include <cstring>
#include <iostream>
#include <queue>
#include <set>
#include <stack>
#include <tuple>
using namespace std;

// Creating a shortcut for int, int pair type
typedef pair<int, int> Pair;
// Creating a shortcut for tuple<int, int, int> type
typedef tuple<double, int, int> Tuple;

// A structure to hold the necessary parameters
struct cell {
	// Row and Column index of its parent
	Pair parent;
	// f = g + h
	double f, g, h;
	cell()
		: parent(-1, -1)
		, f(-1)
		, g(-1)
		, h(-1)
	{
	}
};

// A Utility Function to check whether given cell (row, col)
// is a valid cell or not.
template <size_t ROW, size_t COL>
bool isValid(const array<array<int, COL>, ROW>& grid,
			const Pair& point)
{ // Returns true if row number and column number is in
// range
	if (ROW > 0 && COL > 0)
		return (point.first >= 0) && (point.first < ROW)
			&& (point.second >= 0)
			&& (point.second < COL);

	return false;
}

// A Utility Function to check whether the given cell is
// blocked or not
template <size_t ROW, size_t COL>
bool isUnBlocked(const array<array<int, COL>, ROW>& grid,
				const Pair& point)
{
	// Returns true if the cell is not blocked else false
	return isValid(grid, point)
		&& grid[point.first][point.second] == 1;
}

// A Utility Function to check whether destination cell has
// been reached or not
bool isDestination(const Pair& position, const Pair& dest)
{
	return position == dest;
}

// A Utility Function to calculate the 'h' heuristics.
double calculateHValue(const Pair& src, const Pair& dest)
{
	// h is estimated with the two points distance formula
	return sqrt(pow((src.first - dest.first), 2.0)
				+ pow((src.second - dest.second), 2.0));
}

// A Utility Function to trace the path from the source to
// destination
template <size_t ROW, size_t COL>
void tracePath(
	const array<array<cell, COL>, ROW>& cellDetails,
	const Pair& dest)
{
	printf("\nThe Path is ");

	stack<Pair> Path;

	int row = dest.first;
	int col = dest.second;
	Pair next_node = cellDetails[row][col].parent;
	do {
		Path.push(next_node);
		next_node = cellDetails[row][col].parent;
		row = next_node.first;
		col = next_node.second;
	} while (cellDetails[row][col].parent != next_node);

	Path.emplace(row, col);
	while (!Path.empty()) {
		Pair p = Path.top();
		Path.pop();
		printf("-> (%d,%d) ", p.first, p.second);
	}
}

// A Function to find the shortest path between a given
// source cell to a destination cell according to A* Search
// Algorithm
template <size_t ROW, size_t COL>
void aStarSearch(const array<array<int, COL>, ROW>& grid,
				const Pair& src, const Pair& dest)
{
	// If the source is out of range
	if (!isValid(grid, src)) {
		printf("Source is invalid\n");
		return;
	}

	// If the destination is out of range
	if (!isValid(grid, dest)) {
		printf("Destination is invalid\n");
		return;
	}

	// Either the source or the destination is blocked
	if (!isUnBlocked(grid, src)
		|| !isUnBlocked(grid, dest)) {
		printf("Source or the destination is blocked\n");
		return;
	}

	// If the destination cell is the same as source cell
	if (isDestination(src, dest)) {
		printf("We are already at the destination\n");
		return;
	}

	// Create a closed list and initialise it to false which
	// means that no cell has been included yet This closed
	// list is implemented as a boolean 2D array
	bool closedList[ROW][COL];
	memset(closedList, false, sizeof(closedList));

	// Declare a 2D array of structure to hold the details
	// of that cell
	array<array<cell, COL>, ROW> cellDetails;

	int i, j;
	// Initialising the parameters of the starting node
	i = src.first, j = src.second;
	cellDetails[i][j].f = 0.0;
	cellDetails[i][j].g = 0.0;
	cellDetails[i][j].h = 0.0;
	cellDetails[i][j].parent = { i, j };

	/*
	Create an open list having information as-
	<f, <i, j>>
	where f = g + h,
	and i, j are the row and column index of that cell
	Note that 0 <= i <= ROW-1 & 0 <= j <= COL-1
	This open list is implemented as a set of tuple.*/
	std::priority_queue<Tuple, std::vector<Tuple>,
						std::greater<Tuple> >
		openList;

	// Put the starting cell on the open list and set its
	// 'f' as 0
	openList.emplace(0.0, i, j);

	// We set this boolean value as false as initially
	// the destination is not reached.
	while (!openList.empty()) {
		const Tuple& p = openList.top();
		// Add this vertex to the closed list
		i = get<1>(p); // second element of tuple
		j = get<2>(p); // third element of tuple

		// Remove this vertex from the open list
		openList.pop();
		closedList[i][j] = true;
		/*
				Generating all the 8 successor of this cell
						N.W N N.E
						\ | /
						\ | /
						W----Cell----E
								/ | \
						/ | \
						S.W S S.E

				Cell-->Popped Cell (i, j)
				N --> North	 (i-1, j)
				S --> South	 (i+1, j)
				E --> East	 (i, j+1)
				W --> West		 (i, j-1)
				N.E--> North-East (i-1, j+1)
				N.W--> North-West (i-1, j-1)
				S.E--> South-East (i+1, j+1)
				S.W--> South-West (i+1, j-1)
		*/
		for (int add_x = -1; add_x <= 1; add_x++) {
			for (int add_y = -1; add_y <= 1; add_y++) {
				Pair neighbour(i + add_x, j + add_y);
				// Only process this cell if this is a valid
				// one
				if (isValid(grid, neighbour)) {
					// If the destination cell is the same
					// as the current successor
					if (isDestination(
							neighbour,
							dest)) { // Set the Parent of
									// the destination cell
						cellDetails[neighbour.first]
								[neighbour.second]
									.parent
							= { i, j };
						printf("The destination cell is "
							"found\n");
						tracePath(cellDetails, dest);
						return;
					}
					// If the successor is already on the
					// closed list or if it is blocked, then
					// ignore it. Else do the following
					else if (!closedList[neighbour.first]
										[neighbour.second]
							&& isUnBlocked(grid,
											neighbour)) {
						double gNew, hNew, fNew;
						gNew = cellDetails[i][j].g + 1.0;
						hNew = calculateHValue(neighbour,
											dest);
						fNew = gNew + hNew;

						// If it isn’t on the open list, add
						// it to the open list. Make the
						// current square the parent of this
						// square. Record the f, g, and h
						// costs of the square cell
						//			 OR
						// If it is on the open list
						// already, check to see if this
						// path to that square is better,
						// using 'f' cost as the measure.
						if (cellDetails[neighbour.first]
									[neighbour.second]
										.f
								== -1
							|| cellDetails[neighbour.first]
										[neighbour.second]
											.f
								> fNew) {
							openList.emplace(
								fNew, neighbour.first,
								neighbour.second);

							// Update the details of this
							// cell
							cellDetails[neighbour.first]
									[neighbour.second]
										.g
								= gNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.h
								= hNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.f
								= fNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.parent
								= { i, j };
						}
					}
				}
			}
		}
	}

	// When the destination cell is not found and the open
	// list is empty, then we conclude that we failed to
	// reach the destination cell. This may happen when the
	// there is no way to destination cell (due to
	// blockages)
	printf("Failed to find the Destination Cell\n");
}

// Driver program to test above function
int main()
{
	/* Description of the Grid-
	1--> The cell is not blocked
	0--> The cell is blocked */
	array<array<int, 10>, 9> grid{
		{ { { 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 1, 0, 1, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 } },
		{ { 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 } },
		{ { 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 } },
		{ { 1, 0, 0, 0, 0, 1, 0, 0, 0, 1 } },
		{ { 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 } },
		{ { 1, 1, 1, 0, 0, 0, 1, 0, 0, 1 } } }
	};

	// Source is the left-most bottom-most corner
	Pair src(8, 0);

	// Destination is the left-most top-most corner
	Pair dest(0, 0);

	aStarSearch(grid, src, dest);

	return 0;
}

    `,
    python: `No code available yet :(`,
    java: `No code available yet :(`,
  },
  iddfs: {
    cpp: `
#include<bits/stdc++.h>
using namespace std;
   
// Graph class represents a directed graph using adjacency
// list representation.
class Graph
{
    int V;    // No. of vertices
   
    // Pointer to an array containing
    // adjacency lists
    list<int> *adj;
   
    // A function used by IDDFS
    bool DLS(int v, int target, int limit);
   
public:
    Graph(int V);   // Constructor
    void addEdge(int v, int w);
   
    // IDDFS traversal of the vertices reachable from v
    bool IDDFS(int v, int target, int max_depth);
};
   
Graph::Graph(int V)
{
    this->V = V;
    adj = new list<int>[V];
}
   
void Graph::addEdge(int v, int w)
{
    adj[v].push_back(w); // Add w to v’s list.
}
   
// A function to perform a Depth-Limited search
// from given source 'src'
bool Graph::DLS(int src, int target, int limit)
{
    if (src == target)
        return true;
   
    // If reached the maximum depth, stop recursing.
    if (limit <= 0)
        return false;
   
    // Recur for all the vertices adjacent to source vertex
    for (auto i = adj[src].begin(); i != adj[src].end(); ++i)
       if (DLS(*i, target, limit-1) == true)
          return true;
   
     return false;
}
   
// IDDFS to search if target is reachable from v.
// It uses recursive DFSUtil().
bool Graph::IDDFS(int src, int target, int max_depth)
{
    // Repeatedly depth-limit search till the
    // maximum depth.
    for (int i = 0; i <= max_depth; i++)
       if (DLS(src, target, i) == true)
          return true;
   
    return false;
}
   
// Driver code
int main()
{
    // Let us create a Directed graph with 7 nodes
    Graph g(7);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);
    g.addEdge(2, 6);
   
    int target = 6, maxDepth = 3, src = 0;
    if (g.IDDFS(src, target, maxDepth) == true)
        cout << "Target is reachable from source "
                "within max depth";
    else
        cout << "Target is NOT reachable from source "
                "within max depth";
    return 0;
}
    `,
    python: `
# Python program to print DFS traversal from a given
# given graph
from collections import defaultdict

# This class represents a directed graph using adjacency
# list representation
class Graph:

	def __init__(self,vertices):

		# No. of vertices
		self.V = vertices

		# default dictionary to store graph
		self.graph = defaultdict(list)

	# function to add an edge to graph
	def addEdge(self,u,v):
		self.graph[u].append(v)

	# A function to perform a Depth-Limited search
	# from given source 'src'
	def DLS(self,src,target,maxDepth):

		if src == target : return True

		# If reached the maximum depth, stop recursing.
		if maxDepth <= 0 : return False

		# Recur for all the vertices adjacent to this vertex
		for i in self.graph[src]:
				if(self.DLS(i,target,maxDepth-1)):
					return True
		return False

	# IDDFS to search if target is reachable from v.
	# It uses recursive DLS()
	def IDDFS(self,src, target, maxDepth):

		# Repeatedly depth-limit search till the
		# maximum depth
		for i in range(maxDepth):
			if (self.DLS(src, target, i)):
				return True
		return False

# Create a graph given in the above diagram
g = Graph (7);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(2, 5)
g.addEdge(2, 6)

target = 6; maxDepth = 3; src = 0

if g.IDDFS(src, target, maxDepth) == True:
	print ("Target is reachable from source " +
		"within max depth")
else :
	print ("Target is NOT reachable from source " +
		"within max depth")

# This code is contributed by Neelam Pandey

    `,
    java: `
No code available yet :(
    `,
  },
};

export { codes };
