# Weighted F1 Score

The weighted F1 score is a performance metric used in machine learning to evaluate the effectiveness of a classification model, particularly in cases where the dataset is imbalanced. It is an extension of the F1 score, which is the harmonic mean of precision and recall. The weighted F1 score takes into account the class distribution and provides a more informative measure of the model's performance.

## F1 Score

The F1 score is a measure of a model's accuracy that considers both precision and recall. Precision is the number of true positive predictions divided by the total number of positive predictions made by the model, while recall is the number of true positive predictions divided by the total number of actual positive instances in the dataset. The F1 score is the harmonic mean of precision and recall, and it is defined as:


$$

F1 = 2 \times \frac{precision \times recall}{precision + recall}

$$


The F1 score ranges from 0 to 1, with 1 being the best possible score and 0 being the worst. It is particularly useful in cases where the dataset is imbalanced, as it provides a more balanced measure of the model's performance than accuracy alone.

## Weighted F1 Score

In a multiclass classification problem, the F1 score can be calculated for each class individually. However, this may not provide an overall picture of the model's performance, especially when the dataset is imbalanced. The weighted F1 score addresses this issue by taking into account the class distribution.

The weighted F1 score is calculated by first computing the F1 score for each class, and then taking the average of these scores, weighted by the number of instances in each class. The formula for the weighted F1 score is:


$$

Weighted\_F1 = \frac{\sum_{i=1}^{n} w_i \times F1_i}{\sum_{i=1}^{n} w_i}

$$


where $n$ is the number of classes, $w_i$ is the weight of class $i$, and $F1_i$ is the F1 score for class $i$. The weights are typically set to be proportional to the number of instances in each class, so that the weighted F1 score reflects the model's performance on the majority class as well as the minority class.

## Advantages and Limitations

The weighted F1 score has several advantages over other performance metrics:

- It takes into account both precision and recall, providing a more balanced measure of the model's performance.
- It is particularly useful for imbalanced datasets, as it considers the class distribution and gives more importance to the minority class.
- It can be used for both binary and multiclass classification problems.

However, the weighted F1 score also has some limitations:

- It may not be suitable for all applications, as it assumes that precision and recall are equally important. In some cases, one of these metrics may be more important than the other, and a different performance measure may be more appropriate.
- It can be sensitive to the choice of weights, which may affect the interpretation of the results.

## Conclusion

The weighted F1 score is a useful performance metric for evaluating classification models, particularly in cases where the dataset is imbalanced. By taking into account the class distribution and considering both precision and recall, it provides a more informative measure of the model's performance than accuracy alone. However, it is important to consider the specific application and the relative importance of precision and recall when choosing a performance metric.
