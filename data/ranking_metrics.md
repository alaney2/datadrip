# Ranking Metrics

Ranking metrics are used to evaluate the performance of ranking algorithms, which are commonly employed in information retrieval, machine learning, and recommender systems. These metrics help assess the quality of a ranking model by comparing its predicted rankings to the ground truth or ideal rankings. In this article, we will discuss some popular ranking metrics and their applications.

## Introduction

In many applications, such as search engines, recommender systems, and ad placement, the goal is to rank a set of items according to their relevance or importance to a user's query or preferences. To evaluate the performance of ranking algorithms, we need to compare the predicted rankings to the ground truth or ideal rankings. Ranking metrics provide a quantitative measure of how well a ranking model performs in this task.

There are several ranking metrics available, each with its strengths and weaknesses. Some metrics focus on the quality of the top-ranked items, while others consider the entire ranking. Some metrics are sensitive to the order of items, while others only consider the presence or absence of relevant items. In the following sections, we will discuss some popular ranking metrics and their properties.

## Mean Average Precision (MAP)

Mean Average Precision (MAP) is a popular ranking metric used in information retrieval and machine learning. It is the mean of the average precision scores for each query or user. The average precision for a query is the average of the precision values at the ranks where a relevant item is retrieved, divided by the total number of relevant items.

Given a set of queries $Q$, the MAP is calculated as:


$$

\text{MAP} = \frac{1}{|Q|} \sum_{q \in Q} \frac{\sum_{k=1}^n P(k) \times rel(k)}{\text{number of relevant items for query } q}

$$


where $P(k)$ is the precision at rank $k$, $rel(k)$ is an indicator function that is 1 if the item at rank $k$ is relevant and 0 otherwise, and $n$ is the total number of items retrieved for the query.

MAP is sensitive to the order of items and considers the entire ranking. It is particularly useful when the number of relevant items varies across queries or users, as it normalizes the average precision by the number of relevant items.

## Discounted Cumulative Gain (DCG) and Normalized Discounted Cumulative Gain (NDCG)

Discounted Cumulative Gain (DCG) is a ranking metric that measures the effectiveness of a ranking model based on the relevance of the retrieved items and their positions in the ranking. The idea behind DCG is that highly relevant items appearing lower in the ranking should be penalized. DCG is calculated as:


$$

\text{DCG} = \sum_{k=1}^n \frac{\text{rel}(k)}{\log_2(k+1)}

$$


where $n$ is the total number of items retrieved, and $\text{rel}(k)$ is the relevance of the item at rank $k$. The logarithm in the denominator ensures that items ranked lower contribute less to the overall score.

Normalized Discounted Cumulative Gain (NDCG) is a variant of DCG that normalizes the score by the maximum possible DCG, which is obtained by sorting the items by their relevance. NDCG is calculated as:


$$

\text{NDCG} = \frac{\text{DCG}}{\text{Ideal DCG}}

$$


NDCG ranges from 0 to 1, with 1 indicating a perfect ranking. It is sensitive to the order of items and considers the entire ranking.

## Precision at k (P@k)

Precision at k (P@k) is a ranking metric that measures the proportion of relevant items among the top-k retrieved items. It is calculated as:


$$

\text{P@k} = \frac{\text{number of relevant items in the top-k}}{k}

$$


P@k is sensitive to the order of items but only considers the top-k items in the ranking. It is particularly useful when the focus is on the quality of the top-ranked items, such as in search engines or recommender systems where users are likely to examine only the first few results.

## Mean Reciprocal Rank (MRR)

Mean Reciprocal Rank (MRR) is a ranking metric that measures the effectiveness of a ranking model based on the rank of the first relevant item retrieved. It is calculated as the mean of the reciprocal ranks of the first relevant item for each query or user:


$$

\text{MRR} = \frac{1}{|Q|} \sum_{q \in Q} \frac{1}{\text{rank of the first relevant item for query } q}

$$


MRR is sensitive to the order of items but only considers the first relevant item in the ranking. It is particularly useful when the focus is on the quality of the top-ranked item, such as in question-answering systems where users are looking for a single correct answer.

## Conclusion

Ranking metrics are essential for evaluating the performance of ranking algorithms in information retrieval, machine learning, and recommender systems. Different metrics have different properties and focus on different aspects of the ranking, such as the quality of the top-ranked items or the entire ranking. When evaluating a ranking model, it is important to choose the appropriate metric based on the specific application and user requirements.
