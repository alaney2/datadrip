# Recall

Recall, also known as sensitivity, hit rate, or true positive rate (TPR), is a measure used in binary classification tasks to evaluate the performance of a classifier. It is the proportion of true positive instances among all the instances that were actually positive. In other words, recall measures the ability of a classifier to correctly identify positive examples as positive.

## Definition

Given a confusion matrix, where $tp$ (true positives) represents the number of positive instances correctly classified, and $fn$ (false negatives) represents the number of positive instances misclassified as negative, recall can be calculated as follows:

$$
Recall = \frac{tp}{tp + fn}
$$

A recall of 1 indicates that all positive instances were correctly identified, while a recall of 0 means that none of the positive instances were identified correctly. In general, a higher recall indicates better performance of the classifier in identifying positive instances.

## Interpretation

Recall is particularly useful when the cost of false negatives is high, such as in medical diagnosis, where failing to identify a disease could potentially have severe consequences. In such cases, a high recall classifier would ensure that most of the actual positive cases are identified, even if it may lead to some false positives.

It is important to note that recall alone may not provide a complete picture of the classifier's performance, as it does not take into account false positives (instances incorrectly classified as positive). This is why other measures, such as precision and F1-score, are also used to assess the performance of binary classifiers.

## Relation to Precision

Precision is another performance measure for binary classification tasks, which measures the proportion of true positive instances among all the instances predicted as positive. It can be calculated using the confusion matrix, where $fp$ (false positives) represents the number of negative instances misclassified as positive:

$$
Precision = \frac{tp}{tp + fp}
$$

While recall focuses on the classifier's ability to correctly identify positive instances, precision focuses on the classifier's ability to avoid false positives. In some cases, a trade-off between recall and precision may be necessary, as increasing one may lead to a decrease in the other. This trade-off can be visualized using a precision-recall curve, which plots the values of precision and recall for different decision thresholds.

## F1-Score

The F1-score is a harmonic mean of precision and recall and can be used as a single metric to evaluate the performance of a binary classifier, especially when dealing with imbalanced datasets. It is defined as follows:

$$
F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}
$$

The F1-score ranges from 0 to 1, with 1 indicating perfect classification and 0 indicating the worst possible performance. A higher F1-score represents a better balance between precision and recall.

## Extension to Multi-class Classification

Recall can be extended to multi-class classification tasks by calculating the recall for each class individually and then combining the results. There are several ways to do this, such as micro-averaging, macro-averaging, and weighted averaging. Micro-averaging calculates the overall recall by summing up the true positives and false negatives across all classes, while macro-averaging calculates the recall for each class separately and then takes the average. Weighted averaging also calculates the recall for each class separately, but then takes a weighted average based on the number of instances in each class.

## Conclusion

Recall is an important performance measure for binary classification tasks, as it evaluates the classifier's ability to correctly identify positive instances. It is particularly useful in situations where the cost of false negatives is high. However, recall should be used in conjunction with other measures, such as precision and F1-score, to provide a more comprehensive evaluation of the classifier's performance.
