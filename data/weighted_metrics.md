# Weighted Metrics

Weighted metrics are a set of evaluation measures used in machine learning, particularly in supervised learning tasks, to assess the performance of a model by taking into account the importance or weight of each class or instance. These metrics are especially useful when dealing with imbalanced datasets, where some classes have significantly more instances than others. By assigning different weights to each class or instance, the performance of a model can be evaluated more accurately, reflecting the true impact of its predictions on the target variable.

In this article, we will discuss the concept of weighted metrics, their importance in machine learning, and some common weighted metrics used in practice.

## Importance of Weighted Metrics

In many real-world applications, the distribution of instances among different classes is not uniform. For example, in fraud detection, the number of fraudulent transactions is usually much smaller than the number of non-fraudulent ones. In such cases, using standard evaluation metrics like accuracy, precision, or recall may not provide a true picture of the model's performance, as they do not take into account the imbalance in the dataset.

Weighted metrics address this issue by assigning different weights to each class or instance, depending on their importance or prevalence in the dataset. This allows for a more accurate assessment of the model's performance, as it takes into consideration the true impact of its predictions on the target variable.

## Common Weighted Metrics

There are several weighted metrics used in machine learning to evaluate the performance of models on imbalanced datasets. Some of the most common ones include:

### Weighted Accuracy

Weighted accuracy is a variant of the standard accuracy metric, which takes into account the weights of each class. It is calculated as follows:


$$

\text{Weighted Accuracy} = \frac{\sum_{i=1}^{n} w_i \cdot \text{Accuracy}_i}{\sum_{i=1}^{n} w_i}

$$


where $w_i$ is the weight assigned to class $i$, and $\text{Accuracy}_i$ is the accuracy of the model for class $i$. The weights can be assigned based on the importance of each class or their prevalence in the dataset.

### Weighted Precision

Weighted precision is a variant of the standard precision metric, which takes into account the weights of each class. It is calculated as follows:


$$

\text{Weighted Precision} = \frac{\sum_{i=1}^{n} w_i \cdot \text{Precision}_i}{\sum_{i=1}^{n} w_i}

$$


where $w_i$ is the weight assigned to class $i$, and $\text{Precision}_i$ is the precision of the model for class $i$. The weights can be assigned based on the importance of each class or their prevalence in the dataset.

### Weighted Recall

Weighted recall is a variant of the standard recall metric, which takes into account the weights of each class. It is calculated as follows:


$$

\text{Weighted Recall} = \frac{\sum_{i=1}^{n} w_i \cdot \text{Recall}_i}{\sum_{i=1}^{n} w_i}

$$


where $w_i$ is the weight assigned to class $i$, and $\text{Recall}_i$ is the recall of the model for class $i$. The weights can be assigned based on the importance of each class or their prevalence in the dataset.

### Weighted F1 Score

Weighted F1 score is a variant of the standard F1 score metric, which takes into account the weights of each class. It is calculated as follows:


$$

\text{Weighted F1 Score} = \frac{\sum_{i=1}^{n} w_i \cdot \text{F1 Score}_i}{\sum_{i=1}^{n} w_i}

$$


where $w_i$ is the weight assigned to class $i$, and $\text{F1 Score}_i$ is the F1 score of the model for class $i$. The weights can be assigned based on the importance of each class or their prevalence in the dataset.

## Conclusion

Weighted metrics are essential tools for evaluating the performance of machine learning models on imbalanced datasets. By taking into account the importance or prevalence of each class or instance, these metrics provide a more accurate assessment of the model's performance, reflecting the true impact of its predictions on the target variable. Some common weighted metrics include weighted accuracy, weighted precision, weighted recall, and weighted F1 score.
