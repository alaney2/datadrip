# Logistic Regression

Logistic Regression is a widely used statistical method for binary and multiclass classification tasks. It is a type of generalized linear model that predicts the probability of an outcome based on a set of input features.

## Overview

In Logistic Regression, the response variable is binary, which means it takes values of either 0 or 1. The goal of the model is to estimate the probability of the response variable being 1, given the input features. The logistic function, also known as the sigmoid function, is used to transform the linear combination of the input features into a probability value between 0 and 1.

$$ p(y=1|x) = \frac{1}{1+e^{-z}} $$

where $z = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + ... + \theta_n x_n$ is the linear combination of the input features and their corresponding weights.

The model is trained using maximum likelihood estimation, where the likelihood function is defined as the product of the probabilities of the observed outcomes given the input features and model parameters.

$$ \mathcal{L}(\theta) = \prod_{i=1}^{m} p(y^{(i)}|x^{(i)};\theta) $$

where $m$ is the number of training examples.

The model parameters $(\theta_0, \theta_1, ..., \theta_n)$ are learned using gradient descent to minimize the cost function, which is the negative log-likelihood function.

$$ J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \left[y^{(i)}\log(p(y^{(i)}=1|x^{(i)};\theta)) + (1-y^{(i)})\log(1-p(y^{(i)}=1|x^{(i)};\theta))\right] $$

where $m$ is the number of training examples.

## Binary Classification

Logistic Regression is commonly used for binary classification tasks, where the response variable takes values of either 0 or 1. The decision boundary is a line that separates the two classes, and the model predicts a positive outcome (1) if the probability value is greater than or equal to 0.5, and a negative outcome (0) otherwise.

## Multiclass Classification

Logistic Regression can also be extended to multiclass classification tasks, where the response variable can take on more than two values. One common approach is the one-vs-all (OVA) method, where a separate binary Logistic Regression model is trained for each class, and the class with the highest predicted probability is chosen as the final prediction.

## Regularization

Regularization techniques such as L1 and L2 regularization can be applied to Logistic Regression to prevent overfitting and improve generalization performance. These techniques add a penalty term to the cost function that encourages smaller weights.

## Further Readings

- Softmax Regression
- Decision Trees
- Random Forests
- Support Vector Machines
- Neural Networks
- Naive Bayes Classification
- Ensemble Methods
- Boosting Algorithms
- Unsupervised Learning
