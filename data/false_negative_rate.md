# False Negative Rate

False Negative Rate (FNR) is a performance metric used in the field of machine learning, artificial intelligence, and statistics to evaluate the performance of a binary classification model. It is the proportion of positive instances that are incorrectly classified as negative by the model. In other words, it measures the rate at which the model fails to identify positive instances.

## Definition

Given a binary classification problem, the False Negative Rate is defined as the ratio of the number of false negatives (FN) to the total number of actual positive instances. Mathematically, it can be expressed as:


$$

FNR = \frac{FN}{TP + FN}

$$


Where:
- $FNR$ is the False Negative Rate
- $FN$ is the number of false negatives
- $TP$ is the number of true positives

## Relation to Other Metrics

False Negative Rate is closely related to several other performance metrics used in evaluating classification models. Some of these metrics include:

1. **Sensitivity (Recall, True Positive Rate):** Sensitivity is the proportion of actual positive instances that are correctly identified by the model. It is the complement of the False Negative Rate, i.e., $Sensitivity = 1 - FNR$.

2. **Specificity (True Negative Rate):** Specificity is the proportion of actual negative instances that are correctly identified by the model. It is not directly related to the False Negative Rate but is often used in conjunction with it to evaluate the performance of a model.

3. **Accuracy:** Accuracy is the proportion of all instances (both positive and negative) that are correctly classified by the model. It is not directly related to the False Negative Rate but can be affected by it, especially in cases where the class distribution is imbalanced.

4. **Precision:** Precision is the proportion of predicted positive instances that are actually positive. It is not directly related to the False Negative Rate but can be affected by it, especially in cases where the class distribution is imbalanced.

## Importance of False Negative Rate

The importance of the False Negative Rate as a performance metric depends on the specific problem being addressed and the consequences of misclassification. In some cases, false negatives can have more severe consequences than false positives, making the False Negative Rate a more important metric to consider.

For example, in medical diagnosis, a false negative can result in a patient not receiving the necessary treatment, leading to potentially life-threatening consequences. In such cases, minimizing the False Negative Rate is crucial to ensure that the model is able to correctly identify positive instances.

On the other hand, in some cases, false positives can have more severe consequences than false negatives. For example, in spam detection, a false positive can result in an important email being incorrectly classified as spam, leading to potential loss of information. In such cases, other metrics such as Precision or False Positive Rate might be more important to consider.

## Limitations of False Negative Rate

While the False Negative Rate can be a useful metric in certain situations, it has some limitations:

1. **Imbalanced Class Distribution:** In cases where the class distribution is highly imbalanced, the False Negative Rate can be misleading. A model that simply predicts the majority class for all instances will have a low False Negative Rate, but its overall performance might be poor.

2. **Threshold Dependence:** The False Negative Rate is dependent on the threshold used to convert the model's continuous output into binary predictions. Changing the threshold can result in different False Negative Rates, making it difficult to compare the performance of different models.

3. **Not Suitable for Multi-class Problems:** The False Negative Rate is only applicable to binary classification problems. For multi-class problems, other metrics such as per-class recall or macro-averaged recall might be more appropriate.

To overcome these limitations, it is often recommended to use the False Negative Rate in conjunction with other performance metrics, such as Precision, Recall, and F1-score, to get a more comprehensive understanding of the model's performance. Additionally, techniques such as Receiver Operating Characteristic (ROC) curves and Area Under the Curve (AUC) scores can be used to evaluate the performance of a model across different thresholds, providing a more robust assessment of its performance.
