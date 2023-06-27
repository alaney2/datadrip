# Micro and Macro Averaging

Micro and macro averaging are techniques used to evaluate the performance of machine learning models, particularly in multi-class and multi-label classification problems. These techniques help in aggregating the performance metrics, such as precision, recall, and F1 score, across multiple classes or labels. The choice between micro and macro averaging depends on the problem context and the importance of individual classes or labels.

## Micro Averaging

Micro averaging computes the performance metric by considering the total number of true positives (TP), false positives (FP), and false negatives (FN) across all classes or labels. It then calculates the metric using these aggregated values. This method gives equal weight to each instance in the dataset, regardless of the class or label distribution.

For example, to compute micro-averaged precision, recall, and F1 score, the following formulas can be used:

- Micro-averaged precision: $\frac{\sum_{i=1}^{n} TP_i}{\sum_{i=1}^{n} (TP_i + FP_i)}$
- Micro-averaged recall: $\frac{\sum_{i=1}^{n} TP_i}{\sum_{i=1}^{n} (TP_i + FN_i)}$
- Micro-averaged F1 score: $\frac{2 * \text{Micro-averaged precision} * \text{Micro-averaged recall}}{\text{Micro-averaged precision} + \text{Micro-averaged recall}}$

Here, $n$ is the number of classes or labels, and $TP_i$, $FP_i$, and $FN_i$ are the true positives, false positives, and false negatives for the $i$-th class or label, respectively.

Micro averaging is suitable for problems where the class or label imbalance is significant, and the performance of the model on minority classes or labels is crucial.

## Macro Averaging

Macro averaging computes the performance metric for each class or label separately and then takes the average of these metrics. This method gives equal weight to each class or label, regardless of the number of instances in each class or label.

For example, to compute macro-averaged precision, recall, and F1 score, the following formulas can be used:

- Macro-averaged precision: $\frac{1}{n} \sum_{i=1}^{n} \frac{TP_i}{TP_i + FP_i}$
- Macro-averaged recall: $\frac{1}{n} \sum_{i=1}^{n} \frac{TP_i}{TP_i + FN_i}$
- Macro-averaged F1 score: $\frac{1}{n} \sum_{i=1}^{n} \frac{2 * \frac{TP_i}{TP_i + FP_i} * \frac{TP_i}{TP_i + FN_i}}{\frac{TP_i}{TP_i + FP_i} + \frac{TP_i}{TP_i + FN_i}}$

Here, $n$ is the number of classes or labels, and $TP_i$, $FP_i$, and $FN_i$ are the true positives, false positives, and false negatives for the $i$-th class or label, respectively.

Macro averaging is suitable for problems where the performance of the model on each class or label is equally important, regardless of the class or label distribution.

## Comparison and Use Cases

Micro and macro averaging have different use cases and interpretations. Micro averaging is more sensitive to the performance of the model on larger classes or labels, while macro averaging is more sensitive to the performance on smaller classes or labels. In general, if the dataset has a significant class or label imbalance, and the performance on minority classes or labels is crucial, micro averaging should be preferred. On the other hand, if the performance on each class or label is equally important, macro averaging should be used.

In some cases, it might be useful to compute both micro and macro-averaged metrics to get a comprehensive understanding of the model's performance across different classes or labels. Additionally, weighted averaging can be used to compute a weighted average of the metrics, where the weights are proportional to the number of instances in each class or label. This can provide a balance between micro and macro averaging, taking into account both the class or label distribution and the importance of individual classes or labels.
