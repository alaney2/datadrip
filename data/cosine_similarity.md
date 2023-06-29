# Cosine Similarity

Cosine similarity is a measure of similarity between two non-zero vectors of an inner product space. It is defined to equal the cosine of the angle between them, which is also the same as the inner product of the same vectors normalized to both have length 1.

## Definition

Given two vectors of attributes, A and B, the cosine similarity, cos(θ), is represented using a dot product and magnitude as


$$

\cos(\theta) = \frac{A \cdot B}{||A|| ||B||}

$$


where:
- A and B are vectors.
- $A \cdot B$ denotes the dot product of A and B.
- $||A||$ and $||B||$ are the Euclidean lengths (also known as the L2 norm) of the vectors.

The resulting similarity ranges from -1 meaning exactly opposite, to 1 meaning exactly the same, with 0 usually indicating independence, and in-between values indicating intermediate similarity or dissimilarity.

## Applications

Cosine similarity is particularly used in positive space, where the outcome is neatly bounded in [0,1]. One of the main reasons for its popularity in computation is that it is very efficient to evaluate, especially for sparse vectors.

### Information Retrieval

In the field of information retrieval, cosine similarity is often used as a measure of similarity between documents. This measure can be used to determine the similarity between a search query vector and document vectors in the corpus.

### Machine Learning

In machine learning, cosine similarity is a commonly used similarity measure for real-valued vectors, used in k-nearest neighbors algorithms, clustering algorithms, and recommendation systems.

### Natural Language Processing

In natural language processing, cosine similarity is often used to measure the semantic similarity between two documents or two sentences.

## Properties

Cosine similarity is a measure of orientation and not magnitude. Two vectors with the same orientation have a cosine similarity of 1, two vectors at 90 degrees have a similarity of 0, and two vectors diametrically opposed have a similarity of -1, independent of their magnitude.

Cosine similarity is invariant to scalar multiplication. Multiplying all elements of a vector by a non-zero scalar does not change the similarity score.

## Limitations

Cosine similarity is not a proper metric as it does not satisfy the triangle inequality and it is not true that the cosine similarity between A and B is 1 if and only if A and B are identical. Therefore, it can be argued that cosine similarity is a semi-metric version of the Euclidean distance.
```
