# Matthews Correlation Coefficient

The Matthews Correlation Coefficient (MCC) is a performance metric used in machine learning for binary classification problems. It measures the quality of a binary classification by taking into account true and false positives and negatives. The MCC is a balanced measure that can be used even when the classes are of very different sizes. It ranges from -1 to 1, where 1 indicates a perfect prediction, 0 indicates a random prediction, and -1 indicates an inverse prediction.

## Definition

The Matthews Correlation Coefficient is defined as:


$$

MCC = \frac{(TP \times TN) - (FP \times FN)}{\sqrt{(TP + FP)(TP + FN)(TN + FP)(TN + FN)}}

$$


where:

- $TP$ is the number of true positives
- $TN$ is the number of true negatives
- $FP$ is the number of false positives
- $FN$ is the number of false negatives

The denominator of the MCC formula ensures that the coefficient is normalized, making it easier to interpret and compare across different classification problems.

## Interpretation

The Matthews Correlation Coefficient can be interpreted as follows:

- A value of 1 indicates a perfect prediction, where all true positives and true negatives are correctly identified.
- A value of 0 indicates a random prediction, where the classifier is no better than random chance.
- A value of -1 indicates an inverse prediction, where all true positives are predicted as negatives and all true negatives are predicted as positives.

The MCC is particularly useful when dealing with imbalanced datasets, as it takes into account both over-predicting and under-predicting each class. This makes it a more informative metric than simply looking at accuracy, which can be misleading in cases where one class is much more prevalent than the other.

## Advantages and Limitations

The main advantage of the Matthews Correlation Coefficient is its ability to provide a balanced measure of classification performance, even when the class sizes are very different. This makes it a valuable metric for evaluating classifiers on imbalanced datasets.

However, the MCC has some limitations. It is only applicable to binary classification problems, and it does not provide any information about the performance of individual classes. Additionally, the MCC can be sensitive to small changes in the confusion matrix, which can lead to unstable results when dealing with small sample sizes.

## Example

Consider a binary classification problem with the following confusion matrix:

```
|          | Actual Positive | Actual Negative |
|----------|-----------------|-----------------|
| Predicted Positive | 20 (TP)         | 10 (FP)         |
| Predicted Negative | 5 (FN)          | 65 (TN)         |
```

The Matthews Correlation Coefficient can be calculated as follows:


$$

MCC = \frac{(20 \times 65) - (10 \times 5)}{\sqrt{(20 + 10)(20 + 5)(65 + 10)(65 + 5)}} = \frac{1200}{\sqrt{15000}} \approx 0.62

$$


In this example, the MCC value of 0.62 indicates a moderate level of classification performance.
