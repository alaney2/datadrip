# Pagerank Algorithm

The Pagerank Algorithm is a link analysis algorithm used to evaluate the importance of web pages. It was developed by Larry Page and Sergey Brin while they were studying at Stanford University. Pagerank is based on the idea that a page is important if other important pages link to it. The algorithm assigns a score to each page in a network, with higher scores indicating more important pages.

## How it works

Pagerank works by modeling the links between pages as a graph. Each page is represented as a node in the graph, and each link between pages is represented as an edge. The Pagerank score of a page is calculated by considering the Pagerank scores of the pages that link to it. The more important the linking pages, the more important the linked page.

The Pagerank score of a page is calculated iteratively. At the start of the algorithm, each page is given an equal score. In each iteration, the Pagerank score of each page is updated based on the scores of the pages that link to it. The updated score is a weighted sum of the Pagerank scores of the linking pages, with the weights determined by the number of links on the linking page.

$$
PR(p_i) = \frac{1-d}{N} + d \sum_{p_j \in M(p_i)}\frac{PR(p_j)}{L(p_j)}
$$

Where:
- $PR(p_i)$ is the Pagerank score of page $i$
- $M(p_i)$ is the set of pages that link to page $i$
- $L(p_j)$ is the number of links on page $j$
- $N$ is the total number of pages in the network
- $d$ is a damping factor that determines the probability of a user clicking on a random link instead of following the links on the page. Typically, $d$ is set to 0.85.

The algorithm continues to iterate until the Pagerank scores converge to a stable value.

## Applications

The Pagerank Algorithm is widely used in web search engines to rank search results. Pages with higher Pagerank scores are typically considered to be more important or relevant to the search query.

Pagerank is also used in other applications, such as social network analysis, recommendation systems, and fraud detection.

## Further Readings

- Random Walks on Graphs
- Eigenvector Centrality
- Hubs and Authority
