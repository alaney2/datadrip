# Distance Metrics

Distance metrics are mathematical functions that measure the distance or similarity between two objects or data points in a dataset. They are used in a variety of machine learning tasks such as clustering, classification, and recommendation systems.

## Euclidean Distance

Euclidean distance is the most commonly used distance metric and is used to measure the straight-line distance between two points in a two- or multi-dimensional space. It is defined as:

$$
d(\mathbf{p}, \mathbf{q}) = \sqrt{\sum_{i=1}^{n}(q_i - p_i)^2}
$$

where $\mathbf{p}$ and $\mathbf{q}$ are two points in an $n$-dimensional space.

## Manhattan Distance

Manhattan distance is also known as the taxicab distance and is used to measure the distance between two points in a grid-like path. It is defined as:

$$
d(\mathbf{p}, \mathbf{q}) = \sum_{i=1}^{n}|q_i - p_i|
$$

## Minkowski Distance

Minkowski distance is a generalized distance metric that includes both Euclidean and Manhattan distance. It is defined as:

$$
d(\mathbf{p}, \mathbf{q}) = (\sum_{i=1}^{n}|q_i - p_i|^r)^{\frac{1}{r}}
$$

where $r$ is a positive integer.

## Cosine Similarity

Cosine similarity is a distance metric used to measure the similarity between two non-zero vectors. It is often used in natural language processing tasks such as document clustering and information retrieval. It is defined as:

$$
\cos(\theta) = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|}
$$

where $\mathbf{a}$ and $\mathbf{b}$ are two non-zero vectors.

## Jaccard Similarity

Jaccard similarity is a distance metric used to measure the similarity between two sets. It is often used in recommendation systems and information retrieval. It is defined as:

$$
J(\mathbf{a}, \mathbf{b}) = \frac{\mathbf{a} \cap \mathbf{b}}{\mathbf{a} \cup \mathbf{b}}
$$

where $\mathbf{a}$ and $\mathbf{b}$ are two sets.

## Hamming Distance

Hamming distance is a distance metric used to measure the difference between two equal-length strings of symbols or binary codes. It is defined as the number of positions at which the corresponding symbols or codes are different.

Distance metrics are an essential part of machine learning and data science. By understanding these metrics, one can choose the appropriate distance metric for a given problem and improve the performance of the model.
