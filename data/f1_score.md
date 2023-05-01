# F1 Score

The F1 score is a metric used to evaluate the performance of a binary classification model. It combines precision and recall into a single score, which is the harmonic mean of the two. The F1 score is useful in cases where both precision and recall are important, such as in medical diagnosis or fraud detection.

## Precision

Precision is a metric that measures the proportion of true positives out of all predicted positives. In other words, it measures how accurate the positive predictions are. It is calculated as follows:

$$Precision = \frac{True\ Positives}{True\ Positives + False\ Positives}$$

## Recall

Recall is a metric that measures the proportion of true positives out of all actual positives. In other words, it measures how complete the positive predictions are. It is calculated as follows:

$$Recall = \frac{True\ Positives}{True\ Positives + False\ Negatives}$$

## Math

The F1 score is the harmonic mean of precision and recall, and is calculated as follows:

$$F1\ Score = \frac{2 * Precision * Recall}{Precision + Recall}$$

The F1 score ranges from 0 to 1, with a higher score indicating better performance. It is useful in cases where both precision and recall are important, such as in medical diagnosis or fraud detection.
