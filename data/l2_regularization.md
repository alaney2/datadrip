# L2 Regularization

L2 regularization, also known as Ridge regularization or Tikhonov regularization, is a technique used in machine learning to prevent overfitting by adding a penalty term to the cost function. This penalty term encourages the model to learn simpler, more generalizable patterns in the data, leading to better performance on unseen data.

## Overview

In supervised learning, a model is trained to minimize a cost function, which measures the difference between the model's predictions and the true labels of the training data. However, minimizing the cost function can sometimes lead to overfitting, where the model learns to fit the noise in the training data rather than the underlying patterns. Overfitting results in poor performance on unseen data, as the model has learned patterns that are specific to the training data and do not generalize well.

Regularization is a technique used to prevent overfitting by adding a penalty term to the cost function. This penalty term discourages the model from learning overly complex patterns in the data, leading to better generalization performance. L2 regularization is a specific type of regularization that adds a penalty term proportional to the square of the model's weights.

## Mathematical Formulation

In L2 regularization, the penalty term is added to the cost function as follows:


$$

J_{regularized}(\theta) = J(\theta) + \frac{\lambda}{2m} \sum_{j=1}^{n} \theta_j^2

$$


Here, $J(\theta)$ is the original cost function, $\theta$ is the vector of model weights, $m$ is the number of training examples, $n$ is the number of features, and $\lambda$ is the regularization parameter. The regularization parameter controls the strength of the penalty term: a larger value of $\lambda$ results in a stronger penalty and a simpler model, while a smaller value of $\lambda$ results in a weaker penalty and a more complex model.

The L2 regularization term is the sum of the squares of the model weights, excluding the bias term $\theta_0$. This is because the bias term does not contribute to the complexity of the model and should not be penalized.

When using gradient descent to optimize the regularized cost function, the update rule for the weights becomes:


$$

\theta_j := \theta_j - \alpha \left( \frac{\partial J(\theta)}{\partial \theta_j} + \frac{\lambda}{m} \theta_j \right)

$$


For $j \geq 1$, and


$$

\theta_0 := \theta_0 - \alpha \frac{\partial J(\theta)}{\partial \theta_0}

$$


For $j = 0$. Here, $\alpha$ is the learning rate.

## Applications

L2 regularization is commonly used in linear regression and logistic regression models to prevent overfitting and improve generalization performance. It can also be applied to other types of models, such as neural networks, by adding the L2 penalty term to the cost function.

In addition to its regularization properties, L2 regularization can also help with multicollinearity issues in linear regression. Multicollinearity occurs when two or more features are highly correlated, leading to unstable estimates of the model weights. By adding the L2 penalty term, the model is encouraged to use smaller weights, which can help stabilize the estimates and improve the model's performance.

## Comparison with L1 Regularization

L1 regularization, also known as Lasso regularization, is another type of regularization that adds a penalty term proportional to the absolute value of the model's weights. The main difference between L1 and L2 regularization is that L1 regularization can result in sparse models, where some of the weights are exactly zero. This can be useful for feature selection, as it effectively removes the corresponding features from the model.

In contrast, L2 regularization does not result in sparse models, as the weights are never exactly zero. However, L2 regularization is generally more stable and less sensitive to the choice of the regularization parameter than L1 regularization.

In some cases, a combination of L1 and L2 regularization, known as Elastic Net regularization, can be used to achieve the benefits of both techniques.

## Conclusion

L2 regularization is an important technique in machine learning for preventing overfitting and improving the generalization performance of models. By adding a penalty term proportional to the square of the model's weights to the cost function, L2 regularization encourages the model to learn simpler patterns in the data, leading to better performance on unseen data. L2 regularization is commonly used in linear regression, logistic regression, and neural networks, and can also help with multicollinearity issues in linear regression.
