# Cross Entropy Loss

Cross entropy loss, also known as log loss, is a loss function used in machine learning tasks for classification problems, where the model outputs probabilities of each class for a given input. Cross entropy loss measures the dissimilarity between the predicted probability distribution and the actual distribution, which is often represented as a one-hot encoded vector.

## Formula

The formula for cross entropy loss is as follows:

$$H(p, q) = -\sum_{i} p(i)log(q(i))$$

where $p$ represents the true probability distribution and $q$ represents the predicted probability distribution.

In a classification task with $n$ classes, $p$ is a one-hot encoded vector of length $n$, where the true class is represented by 1 and 0s for other classes. Similarly, $q$ is a vector of length $n$ representing the predicted probabilities for each class.

## Interpretation

The cross entropy loss value is always non-negative, and it is zero when the predicted distribution is identical to the true distribution. The loss function penalizes the model more heavily when it makes a confident incorrect prediction than when it makes an uncertain incorrect prediction. This is because the logarithmic function amplifies the differences between predicted and true probabilities.

## Applications

Cross entropy loss is commonly used in deep learning models for classification tasks such as image classification, natural language processing, and speech recognition. It is often used in conjunction with the softmax activation function in the output layer of a neural network.

## Further Readings

- Binary Cross Entropy Loss
- Categorical Cross Entropy Loss
- Focal Loss
- Jensen-Shannon Divergence
- KL Divergence
- Information Theory
- Neural Network Architectures
- Optimization Algorithms
- Regularization Techniques
