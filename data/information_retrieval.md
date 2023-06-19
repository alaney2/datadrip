# Information Retrieval

Information Retrieval (IR) is the process of searching for and retrieving relevant information from a collection of documents or resources, usually in response to a user query. The primary goal of IR is to find and present the most relevant documents to the user, while filtering out irrelevant or less relevant documents. IR has applications in various domains, including web search engines, digital libraries, and recommender systems.

## Text Preprocessing

Text preprocessing is an essential step in IR, as it helps to clean and normalize the text data, making it easier to analyze and process. Some common text preprocessing techniques include:

1. Tokenization: Splitting the text into individual words or tokens.
2. Stopword removal: Removing common words that do not carry much meaning, such as "the", "and", "is", etc.
3. Stemming and Lemmatization: Reducing words to their root form to remove variations due to inflections and derivations.
4. Lowercasing: Converting all text to lowercase to ensure uniformity and reduce dimensionality.

## Vector Space Model

The Vector Space Model (VSM) is a widely used representation of text documents in IR. In VSM, each document is represented as a vector in a high-dimensional space, where each dimension corresponds to a unique term (word) in the document collection. The value of each dimension (or coordinate) in the vector represents the importance or weight of the corresponding term in the document. This representation allows for easy computation of similarity between documents and queries, as well as efficient indexing and retrieval of documents.

## Term Frequency-Inverse Document Frequency (TF-IDF)

TF-IDF is a widely used weighting scheme in IR that assigns a weight to each term in a document based on its importance. The importance of a term is determined by its frequency in the document (Term Frequency, or TF) and its rarity in the document collection (Inverse Document Frequency, or IDF). The TF-IDF weight of a term is the product of its TF and IDF values:


$$

\text{TF-IDF}(t, d) = \text{TF}(t, d) \times \text{IDF}(t)

$$


where $t$ is the term, $d$ is the document, and $\text{IDF}(t) = \log \frac{N}{\text{DF}(t)}$, with $N$ being the total number of documents in the collection and $\text{DF}(t)$ being the number of documents containing term $t$. The TF-IDF weighting scheme helps to emphasize terms that are more informative and discriminative, while downplaying the importance of common terms that appear in many documents.

## Cosine Similarity

Cosine similarity is a widely used similarity measure in IR, especially in the context of the Vector Space Model. Given two document vectors $A$ and $B$, the cosine similarity between them is defined as the cosine of the angle between the vectors:


$$

\text{cosine\_similarity}(A, B) = \frac{A \cdot B}{\|A\| \times \|B\|}

$$


where $A \cdot B$ is the dot product of the vectors, and $\|A\|$ and $\|B\|$ are their magnitudes. The cosine similarity ranges from -1 (completely dissimilar) to 1 (identical), with 0 indicating orthogonality (no similarity). In IR, cosine similarity is often used to measure the similarity between a query and a document, with higher values indicating higher relevance.

## Inverted Index

An inverted index is a data structure used in IR to efficiently store and retrieve documents containing specific terms. In an inverted index, each term is associated with a list of documents (or document IDs) that contain the term, along with additional information such as term frequency and position. This allows for fast retrieval of documents containing a given set of terms, as well as efficient computation of similarity scores and ranking of documents.

## Query Expansion

Query expansion is a technique used in IR to improve the effectiveness of user queries by adding additional terms or phrases that are related to the original query. This can help to retrieve more relevant documents, especially when the user's initial query is too short or ambiguous. Query expansion can be based on various sources of information, such as thesauri, ontologies, or relevance feedback from the user.

## Relevance Feedback

Relevance feedback is a technique used in IR to improve the retrieval performance by incorporating the user's feedback on the relevance of retrieved documents. The user's feedback can be used to modify the query, adjust the weighting of terms, or re-rank the retrieved documents. Some common relevance feedback methods include the Rocchio algorithm, which adjusts the query vector based on the centroid of relevant and non-relevant documents, and pseudo-relevance feedback, which assumes that the top-ranked documents are relevant and uses them to expand the query.
