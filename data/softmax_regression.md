# Softmax Regression

Softmax regression, also known as multinomial logistic regression, is a generalization of logistic regression that can be used for multiclass classification problems. In logistic regression, we predict the probability of an input belonging to one of two classes. In softmax regression, we predict the probability of an input belonging to one of multiple classes.

## Problem Formulation

Suppose we have a dataset $\{(x^{(1)}, y^{(1)}), (x^{(2)}, y^{(2)}), \dots, (x^{(m)}, y^{(m)})\}$, where $x^{(i)} \in \mathbb{R}^n$ is an input feature vector and $y^{(i)} \in \{1, 2, \dots, K\}$ is the corresponding class label. Our goal is to learn a model that can predict the probability of an input $x$ belonging to each class $k \in \{1, 2, \dots, K\}$.

## Softmax Function

The softmax function is used to convert a vector of real numbers into a probability distribution. Given an input vector $z \in \mathbb{R}^K$, the softmax function is defined as:


$$

\text{softmax}(z)_k = \frac{e^{z_k}}{\sum_{j=1}^K e^{z_j}}, \quad \text{for} \ k = 1, 2, \dots, K

$$


The output of the softmax function is a vector of probabilities, where each element $\text{softmax}(z)_k$ represents the probability of the input belonging to class $k$. The sum of all probabilities is equal to 1.

## Model

In softmax regression, we model the probability of an input $x$ belonging to class $k$ as:


$$

P(y=k | x; W) = \frac{e^{w_k^T x}}{\sum_{j=1}^K e^{w_j^T x}}, \quad \text{for} \ k = 1, 2, \dots, K

$$


where $W = \{w_1, w_2, \dots, w_K\}$ is a set of weight vectors, and $w_k \in \mathbb{R}^n$ is the weight vector associated with class $k$. The model can also be written in matrix form as:


$$

P(y=k | x; W) = \frac{e^{(Wx)_k}}{\sum_{j=1}^K e^{(Wx)_j}}, \quad \text{for} \ k = 1, 2, \dots, K

$$


where $W \in \mathbb{R}^{K \times n}$ is a weight matrix.

## Loss Function

To train the softmax regression model, we need to define a loss function that measures the discrepancy between the predicted probabilities and the true class labels. A common choice for the loss function is the cross-entropy loss, which is defined as:


$$

L(W) = -\frac{1}{m} \sum_{i=1}^m \sum_{k=1}^K \mathbb{1}\{y^{(i)} = k\} \log P(y=k | x^{(i)}; W)

$$


where $\mathbb{1}\{y^{(i)} = k\}$ is an indicator function that is equal to 1 if $y^{(i)} = k$ and 0 otherwise. The cross-entropy loss is a measure of the difference between the predicted probability distribution and the true probability distribution, which is a one-hot encoded vector of the true class labels.

## Optimization

To find the optimal weight matrix $W$, we minimize the cross-entropy loss using an optimization algorithm such as gradient descent. The gradient of the loss function with respect to the weight matrix is given by:


$$

\nabla_W L(W) = -\frac{1}{m} \sum_{i=1}^m \left[ \left( \mathbb{1}\{y^{(i)} = k\} - P(y=k | x^{(i)}; W) \right) x^{(i)} \right]

$$


We can update the weight matrix using the gradient descent update rule:


$$

W := W - \alpha \nabla_W L(W)

$$


where $\alpha$ is the learning rate.

## Regularization

To prevent overfitting, we can add a regularization term to the loss function. A common choice for regularization is the L2 regularization, which is defined as:


$$

R(W) = \frac{\lambda}{2} \sum_{k=1}^K \sum_{j=1}^n w_{kj}^2

$$


where $\lambda$ is the regularization parameter. The regularized loss function is then given by:


$$

L_{\text{reg}}(W) = L(W) + R(W)

$$


The gradient of the regularized loss function with respect to the weight matrix is given by:


$$

\nabla_W L_{\text{reg}}(W) = \nabla_W L(W) + \lambda W

$$


We can update the weight matrix using the gradient descent update rule for the regularized loss function:


$$

W := W - \alpha \nabla_W L_{\text{reg}}(W)

$$


## Prediction

After training the softmax regression model, we can make predictions for a new input $x$ by computing the probabilities of the input belonging to each class and selecting the class with the highest probability:


$$

\hat{y} = \arg\max_k P(y=k | x; W)

$$
