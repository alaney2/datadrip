# Micro F1 Score

The Micro F1 Score is a performance metric used in classification problems, particularly in multi-class and multi-label classification tasks. It is a variant of the F1 score, which is a harmonic mean of precision and recall. The Micro F1 Score is calculated by aggregating the contributions of all classes or labels to compute the average precision, recall, and F1 score across all classes.

## Background

In classification problems, the goal is to assign an instance to one or more classes or labels based on its features. A common way to evaluate the performance of a classification model is to compute various metrics, such as accuracy, precision, recall, and F1 score. These metrics help to understand the trade-offs between true positive, false positive, true negative, and false negative predictions.

In multi-class and multi-label classification problems, the number of classes or labels is more than two, and the classification performance must be evaluated across all these classes. Micro F1 Score is one such metric that provides a single measure of the model's performance across all classes.

## Calculation

The Micro F1 Score is calculated using the following steps:

1. Compute the confusion matrix for each class or label. The confusion matrix is a table that shows the number of true positive (TP), false positive (FP), true negative (TN), and false negative (FN) predictions for each class or label.

2. Calculate the precision and recall for each class or label using the TP, FP, TN, and FN values from the confusion matrix. The precision is the ratio of true positive predictions to the total number of positive predictions (TP + FP), while the recall is the ratio of true positive predictions to the total number of actual positive instances (TP + FN).

3. Calculate the F1 score for each class or label using the precision and recall values. The F1 score is the harmonic mean of precision and recall and is given by the formula:

$$
F1 = 2 \times \frac{precision \times recall}{precision + recall}
$$

4. Compute the Micro F1 Score by aggregating the TP, FP, and FN values across all classes or labels and then calculating the overall precision, recall, and F1 score. The Micro F1 Score is calculated as follows:

$$
Micro\,F1 = 2 \times \frac{\sum_{i=1}^{n} TP_i}{\sum_{i=1}^{n} (TP_i + FP_i) + \sum_{i=1}^{n} (TP_i + FN_i)}
$$

where $n$ is the number of classes or labels, and $TP_i$, $FP_i$, and $FN_i$ are the true positive, false positive, and false negative values for the $i$-th class or label, respectively.

## Interpretation

The Micro F1 Score ranges from 0 to 1, with higher values indicating better classification performance. A Micro F1 Score of 1 represents perfect classification, while a score of 0 indicates that the model fails to correctly classify any instance.

The Micro F1 Score is particularly useful in cases where the class distribution is imbalanced, as it gives equal weight to the performance of each class or label. This can help to identify models that perform well on the majority class but poorly on minority classes.

## Comparison with Other Metrics

The Micro F1 Score is related to other classification performance metrics, such as the Macro F1 Score and the Weighted F1 Score. The Macro F1 Score computes the average F1 score across all classes, while the Weighted F1 Score computes the average F1 score weighted by the number of instances in each class. These metrics provide different perspectives on the overall performance of a classification model and can be used in conjunction with the Micro F1 Score to evaluate multi-class and multi-label classification tasks.
