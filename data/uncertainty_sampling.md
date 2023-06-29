# Uncertainty Sampling

Uncertainty sampling is a strategy used in active learning where the learner selects the data points about which it is most uncertain to label. It is a type of query synthesis, and the goal is to reduce the labeling cost during the training of machine learning models.

## Overview

In traditional supervised learning, the learner is passive and learns from a given set of labeled data. However, in active learning, the learner is active and can query the labels of unlabeled data points. Uncertainty sampling is a strategy used in active learning where the learner selects the data points about which it is most uncertain to label.

The uncertainty of a data point can be measured in different ways. For example, it can be measured by the margin sampling where the uncertainty is proportional to the difference between the highest and the second highest posterior probability. It can also be measured by entropy where the uncertainty is proportional to the entropy of the posterior probability distribution.

## Algorithm

The algorithm of uncertainty sampling can be summarized as follows:

1. Train a model on the current labeled data.
2. Use the model to predict the labels of the unlabeled data.
3. Measure the uncertainty of each prediction.
4. Select the data point with the highest uncertainty.
5. Query the label of the selected data point.
6. Add the labeled data point to the labeled data.
7. Repeat the process until a stopping criterion is met.

The stopping criterion can be a fixed number of queries, a fixed amount of time, or a certain level of performance.

## Advantages and Disadvantages

The main advantage of uncertainty sampling is that it can significantly reduce the labeling cost by selecting the most informative data points to label. It can be particularly useful when the labeling cost is high, such as in medical diagnosis or speech recognition.

The main disadvantage of uncertainty sampling is that it can be biased towards the data points that are difficult to label. This can lead to a lack of diversity in the labeled data and a poor generalization performance. To mitigate this problem, uncertainty sampling can be combined with other strategies, such as diversity sampling or query-by-committee.

## Applications

Uncertainty sampling has been applied in various domains, including text classification, image recognition, and speech recognition. It has also been used in reinforcement learning to select the actions to explore.

In conclusion, uncertainty sampling is a powerful tool in active learning. It allows the learner to actively select the most informative data points to label, thereby reducing the labeling cost and improving the learning efficiency. However, it also has its limitations and should be used with caution.
