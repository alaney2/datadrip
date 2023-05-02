# Macro F1 Score

Macro F1 Score is a performance metric used to evaluate the effectiveness of classification algorithms, particularly in multiclass classification problems. It is the harmonic mean of precision and recall, calculated separately for each class, and then averaged across all classes.

## Overview

In multiclass classification problems, where there are multiple classes to predict, it is essential to evaluate the performance of a classifier not only based on its overall accuracy but also on its ability to predict each class correctly. Macro F1 Score is one such metric that helps to assess the performance of a classifier in handling each class with equal importance.

Macro F1 Score is calculated as follows:

1. Compute the precision and recall for each class separately.
2. Calculate the F1 Score for each class using the formula:

   $$
   F1_i = \frac{2 \times Precision_i \times Recall_i}{Precision_i + Recall_i}
   $$

3. Calculate the Macro F1 Score by averaging the F1 Scores of all classes:

   $$
   Macro\ F1\ Score = \frac{1}{n}\sum_{i=1}^{n} F1_i
   $$

   where $n$ is the number of classes.

Macro F1 Score is particularly useful when dealing with imbalanced datasets, where some classes have significantly fewer samples than others. By treating each class with equal importance, the Macro F1 Score provides a better understanding of the classifier's performance on minority classes.

## Example

Let's consider a multiclass classification problem with three classes, A, B, and C. The classifier's predictions are compared with the true labels, and the following confusion matrix is obtained:

|      | Predicted A | Predicted B | Predicted C |
|------|-------------|-------------|-------------|
| True A | 40          | 10          | 5           |
| True B | 5           | 35          | 15          |
| True C | 10          | 15          | 60          |

To calculate the Macro F1 Score, first, we need to compute the precision and recall for each class:

- Class A
  - Precision A = $\frac{True\ Positives\ A}{True\ Positives\ A + False\ Positives\ A} = \frac{40}{40+5+10} = \frac{40}{55} = 0.727$
  - Recall A = $\frac{True\ Positives\ A}{True\ Positives\ A + False\ Negatives\ A} = \frac{40}{40+10+5} = \frac{40}{55} = 0.727$

- Class B
  - Precision B = $\frac{True\ Positives\ B}{True\ Positives\ B + False\ Positives\ B} = \frac{35}{10+35+15} = \frac{35}{60} = 0.583$
  - Recall B = $\frac{True\ Positives\ B}{True\ Positives\ B + False\ Negatives\ B} = \frac{35}{5+35+15} = \frac{35}{55} = 0.636$

- Class C
  - Precision C = $\frac{True\ Positives\ C}{True\ Positives\ C + False\ Positives\ C} = \frac{60}{5+15+60} = \frac{60}{80} = 0.75$
  - Recall C = $\frac{True\ Positives\ C}{True\ Positives\ C + False\ Negatives\ C} = \frac{60}{10+15+60} = \frac{60}{85} = 0.706$

Now, we can calculate the F1 Score for each class:

- Class A: $F1_A = \frac{2 \times Precision_A \times Recall_A}{Precision_A + Recall_A} = \frac{2 \times 0.727 \times 0.727}{0.727 + 0.727} = 0.727$
- Class B: $F1_B = \frac{2 \times Precision_B \times Recall_B}{Precision_B + Recall_B} = \frac{2 \times 0.583 \times 0.636}{0.583 + 0.636} = 0.608$
- Class C: $F1_C = \frac{2 \times Precision_C \times Recall_C}{Precision_C + Recall_C} = \frac{2 \times 0.75 \times 0.706}{0.75 + 0.706} = 0.727$

Finally, the Macro F1 Score is the average of the F1 Scores of all classes:

$$
Macro\ F1\ Score = \frac{1}{3}(F1_A + F1_B + F1_C) = \frac{1}{3}(0.727 + 0.608 + 0.727) \approx 0.687
$$

Thus, the Macro F1 Score for this classifier is approximately 0.687.

## Interpretation

A higher Macro F1 Score indicates better classification performance, particularly when dealing with imbalanced datasets. A Macro F1 Score of 1 indicates perfect classification, while a score of 0 signifies the worst possible performance.

It is essential to note that the Macro F1 Score does not take the class distribution into account. This means that if a classifier performs poorly on a minority class, it will still have a significant impact on the overall Macro F1 Score, making it a suitable metric for evaluating classifiers in imbalanced datasets.

However, when dealing with balanced datasets or when the class distribution is essential, other metrics like Micro F1 Score or Weighted F1 Score may be more appropriate.

## Limitations

One limitation of the Macro F1 Score is that it treats each class equally, regardless of the class distribution. This can lead to misleading results when dealing with imbalanced datasets where the class distribution is essential. In such cases, it is recommended to use other metrics like Micro F1 Score or Weighted F1 Score that consider the class distribution.

Another limitation is that the Macro F1 Score is sensitive to the number of classes, making it challenging to compare classifiers with a different number of classes. To overcome this issue, one can use other metrics like the Jaccard similarity score or the Hamming loss that are not affected by the number of classes.
