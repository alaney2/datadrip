# Average Precision

Average Precision (AP) is a popular evaluation metric used in the field of Information Retrieval (IR) and Machine Learning (ML) to measure the effectiveness of ranked retrieval results. It is particularly useful for tasks where the order of the retrieved items is important, such as search engines, recommender systems, and object detection in computer vision.

AP is calculated by taking the average of the precision values at each relevant item in the ranked list of retrieved items. Precision is the proportion of true positive items among the retrieved items up to a certain rank. In other words, AP summarizes the precision-recall curve by averaging the precision values at different recall levels.

## Definition

Given a ranked list of retrieved items, let $R$ be the total number of relevant items in the dataset, and let $r_i$ be the rank of the $i$-th relevant item in the ranked list. The precision at rank $r_i$ is defined as:


$$

P(r_i) = \frac{i}{r_i}

$$


The Average Precision is then defined as:


$$

AP = \frac{1}{R} \sum_{i=1}^R P(r_i)

$$


In the case where there are no relevant items in the dataset, the AP is defined to be 0.

## Interpretation

The AP can be interpreted as the area under the precision-recall curve, which is a plot of precision values against recall values. The recall at rank $r_i$ is defined as the proportion of relevant items retrieved up to rank $r_i$ out of the total number of relevant items in the dataset:


$$

R(r_i) = \frac{i}{R}

$$


The precision-recall curve is a plot of $P(r_i)$ against $R(r_i)$ for all relevant items in the ranked list. The AP is the area under this curve, which can be interpreted as the average precision over all possible recall levels.

A high AP value indicates that the ranked list has a high proportion of relevant items at the top of the list, and that the precision remains high as more items are retrieved. A low AP value indicates that the ranked list has a low proportion of relevant items at the top of the list, and that the precision decreases as more items are retrieved.

## Example

Consider a ranked list of retrieved items, where `R` denotes a relevant item and `N` denotes a non-relevant item:

```
R, N, R, N, R, N, N, R
```

There are 4 relevant items in the dataset, so $R = 4$. The ranks of the relevant items are 1, 3, 5, and 8. The precision values at these ranks are:


$$

P(1) = \frac{1}{1} = 1.0 \\
P(3) = \frac{2}{3} = 0.67 \\
P(5) = \frac{3}{5} = 0.6 \\
P(8) = \frac{4}{8} = 0.5

$$


The Average Precision is:


$$

AP = \frac{1}{4} (1.0 + 0.67 + 0.6 + 0.5) = 0.6925

$$


## Limitations

AP has some limitations as an evaluation metric:

1. It assumes that all relevant items are equally important, which may not be the case in some applications. For example, in a search engine, some relevant documents may be more relevant than others, and a metric that takes this into account may be more appropriate.

2. It is sensitive to the total number of relevant items in the dataset, which can vary between different queries or tasks. This can make it difficult to compare AP values across different tasks or datasets.

3. It does not take into account the position of non-relevant items in the ranked list, which can be important in some applications. For example, in a recommender system, it may be more important to avoid recommending non-relevant items at the top of the list than to retrieve all relevant items.

Despite these limitations, AP remains a popular evaluation metric due to its simplicity and ease of interpretation. It is often used in conjunction with other metrics, such as Mean Average Precision (MAP) and Area Under the Curve (AUC), to provide a more comprehensive evaluation of ranked retrieval systems.
