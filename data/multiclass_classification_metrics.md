# Multiclass Classification Metrics

Multiclass classification is a type of supervised learning where the goal is to classify instances into one of three or more classes. In contrast to binary classification, where there are only two classes, multiclass classification involves more complexity in evaluating the performance of a model. This article discusses various metrics used to evaluate the performance of a multiclass classifier.

## Confusion Matrix

A confusion matrix is a table that is used to describe the performance of a classification model on a set of data for which the true values are known. Each row of the matrix represents the instances in a predicted class, while each column represents the instances in an actual class. The diagonal elements of the matrix represent the number of correct predictions, while the off-diagonal elements represent the number of incorrect predictions.

For a multiclass classification problem with $C$ classes, the confusion matrix is a $C \times C$ matrix, where the element at the $i$-th row and $j$-th column represents the number of instances of class $i$ predicted as class $j$. The sum of all elements in the matrix is equal to the total number of instances in the dataset.

## Accuracy

Accuracy is the most intuitive performance measure for classification problems. It is the ratio of the number of correct predictions to the total number of predictions. In the context of a confusion matrix, accuracy can be calculated as the sum of the diagonal elements divided by the sum of all elements in the matrix:


$$

\text{Accuracy} = \frac{\sum_{i=1}^C M_{ii}}{\sum_{i=1}^C \sum_{j=1}^C M_{ij}}

$$


where $M_{ij}$ is the element at the $i$-th row and $j$-th column of the confusion matrix.

However, accuracy can be misleading in cases where the class distribution is imbalanced, as it does not take into account the performance of the classifier on individual classes.

## Precision, Recall, and F1 Score

Precision, recall, and F1 score are metrics that provide more insight into the performance of a classifier on individual classes. For multiclass classification, these metrics can be calculated for each class and then averaged to obtain a single value.

- Precision: The ratio of true positives to the sum of true positives and false positives. It measures the ability of the classifier to correctly identify instances of a specific class.


$$

\text{Precision}_i = \frac{M_{ii}}{\sum_{j=1}^C M_{ji}}

$$


- Recall: The ratio of true positives to the sum of true positives and false negatives. It measures the ability of the classifier to identify all instances of a specific class.


$$

\text{Recall}_i = \frac{M_{ii}}{\sum_{j=1}^C M_{ij}}

$$


- F1 Score: The harmonic mean of precision and recall. It provides a single value that balances the trade-off between precision and recall.


$$

\text{F1 Score}_i = 2 \cdot \frac{\text{Precision}_i \cdot \text{Recall}_i}{\text{Precision}_i + \text{Recall}_i}

$$


There are several ways to average these metrics across all classes:

1. **Macro-average**: Calculate the metric independently for each class and then take the average. This gives equal weight to each class, regardless of the number of instances.


$$

\text{Macro-average Precision} = \frac{1}{C} \sum_{i=1}^C \text{Precision}_i

$$


2. **Micro-average**: Aggregate the contributions of all classes to compute the average metric. This gives equal weight to each instance, regardless of the class.


$$

\text{Micro-average Precision} = \frac{\sum_{i=1}^C M_{ii}}{\sum_{i=1}^C \sum_{j=1}^C M_{ji}}

$$


3. **Weighted average**: Calculate the metric independently for each class and then take the average, weighted by the number of instances in each class. This gives more importance to classes with more instances.


$$

\text{Weighted-average Precision} = \frac{1}{N} \sum_{i=1}^C n_i \cdot \text{Precision}_i

$$


where $n_i$ is the number of instances in class $i$ and $N$ is the total number of instances.

## Conclusion

Evaluating the performance of a multiclass classifier requires the use of various metrics, such as accuracy, precision, recall, and F1 score. These metrics can be calculated using a confusion matrix and averaged across all classes using different methods, such as macro-average, micro-average, or weighted average. It is important to consider the class distribution and the specific problem requirements when selecting the appropriate metrics and averaging methods for evaluating a multiclass classifier.
