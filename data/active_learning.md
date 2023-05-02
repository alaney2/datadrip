# Active Learning

Active learning is a machine learning technique that aims to reduce the amount of labeled data needed to train a model by actively selecting informative examples to label. In supervised learning, a model is trained on a dataset where all examples are labeled. However, labeling data can be time-consuming and expensive, especially if the dataset is large. Active learning addresses this issue by selecting the most important examples for labeling, allowing the model to learn from fewer labeled examples.

## Overview

Active learning typically involves a cycle of selecting informative examples, having them labeled, and then retraining the model. There are many different strategies for selecting examples, including uncertainty sampling, query-by-committee, and density-based methods. Uncertainty sampling selects examples that the model is most uncertain about, while query-by-committee selects examples that different models disagree on. Density-based methods focus on selecting examples from regions of high density in the feature space.

Active learning has been successfully applied to a wide range of tasks, including text classification, image classification, and object detection. In many cases, active learning has been shown to achieve similar or even better performance with fewer labeled examples than supervised learning.

## Uncertainty Sampling

One of the most commonly used active learning strategies is uncertainty sampling. Uncertainty sampling selects examples that the model is most uncertain about. This is typically done by measuring the model's entropy or margin on each example. Entropy measures the model's uncertainty by computing the entropy of the output probabilities, while margin measures the difference between the top two output probabilities.

$$
Entropy = -\sum_{i}p_i log_2 p_i
$$

$$
Margin = p_{\hat{y_1}} - p_{\hat{y_2}}
$$

where $p_i$ is the predicted probability of class $i$, $\hat{y_1}$ is the most likely class, and $\hat{y_2}$ is the second most likely class.

## Query Strategy

Another important aspect of active learning is the query strategy, which determines how the selected examples are labeled. The query strategy can have a significant impact on the performance of the model, especially if the labeling process is noisy or expensive.

Some common query strategies include manual labeling, crowdsourcing, and machine labeling. Manual labeling involves having domain experts label the examples, while crowdsourcing involves outsourcing the labeling task to a large group of non-experts. Machine labeling uses other machine learning models to automatically label the examples, but this can be risky if the models are not reliable.

## Conclusion

Active learning is a powerful technique for reducing the amount of labeled data needed to train a machine learning model. By selecting the most informative examples for labeling, active learning can achieve similar or even better performance with fewer labeled examples than supervised learning. There are many different active learning strategies and query strategies, and the choice of strategy can have a significant impact on the performance of the model.
