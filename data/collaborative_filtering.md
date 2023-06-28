# Collaborative Filtering

Collaborative filtering is a method used in recommender systems to make automatic predictions about the interests of a user by collecting preferences from many users. The underlying assumption of the collaborative filtering approach is that if a person A has the same opinion as a person B on an issue, A is more likely to have B's opinion on a different issue.

## Overview

Collaborative filtering is based on the idea that users similar to me can be used to predict how much I will like a particular product or service those users have used/experienced but I have not. This technique uses other users' profiles and their behavior to recommend items. In other words, it assumes that if two users agree on one issue, they are likely to agree on others as well.

There are two types of collaborative filtering:

1. **User-User Collaborative filtering**: Here we find look-a-like customers (based on similarity) and offer products based on what his/her look-a-like has chosen. This algorithm is very effective but takes a lot of time and resources. It requires to compute every customer pair information which takes time. Therefore, for big base platforms, this algorithm is hard to implement without a very strong parallelizable system.

2. **Item-Item Collaborative filtering**: It is quite similar to the previous algorithm, but instead of finding customer look-a-like, we try finding item look-a-like. Once we have item look-a-like matrix, we can easily recommend alike items to a customer who has purchased any item from the store. This algorithm is far less resource consuming than user-user collaborative filtering. Hence, for a new customer, the algorithm takes far lesser time than user-user collaborate as we don’t need all similarity scores between customers. And with fixed number of products, product-product look alike matrix is fixed over time.

## Algorithm

The collaborative filtering algorithm has the following steps:

1. **Identify the Neighbors**: Find other users who have rated the same items as the current user. The similarity of users is calculated using similarity measures like cosine similarity or Pearson correlation.

2. **Generate Predictions**: Predict the ratings of the items that the current user has not yet rated. This is done by calculating the weighted average of the ratings of the "neighbor" users.

## Advantages and Disadvantages

Collaborative filtering has several advantages. It does not require any information about the items or the users, making it easy to implement and able to deal with any kind of item. It can also help users discover new interests by recommending items that they might not have thought to search for.

However, collaborative filtering also has some disadvantages. It suffers from the "cold start" problem, where it cannot make any recommendations for users or items that have no ratings. It also has a scalability issue, as the number of users and items grows, the computation resources required to compute the similarity between users or items grows exponentially.

Despite these challenges, collaborative filtering is a powerful technique and is widely used in recommendation systems across a variety of domains.
