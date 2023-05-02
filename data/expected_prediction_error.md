# Expected Prediction Error

Expected Prediction Error (EPE) is a concept in machine learning that measures the expected difference between the predicted output of a model and the actual output. It is also known as the expected test error or test risk. EPE is used to evaluate the performance of machine learning models and to estimate the generalization error.

## Definition

Formally, the expected prediction error of a machine learning model is defined as:

$$EPE = \mathbb{E}_{y,x}[(y - \hat{f}(x))^2]$$

where $y$ is the true output, $x$ is the input, and $\hat{f}(x)$ is the predicted output of the model. The expectation is taken over all possible input-output pairs $(x,y)$.

## Interpretation

EPE measures the average prediction error of a model over all possible input-output pairs. A lower EPE indicates a better performance of the model. EPE can be decomposed into two components: the bias and the variance.

The bias of a model measures how far the predicted values are from the true values on average. A model with high bias is too simple and cannot capture the complexity of the data. In contrast, a model with low bias is more flexible and can fit the data better.

The variance of a model measures how much the predicted values vary around their mean on average. A model with high variance is too complex and overfits the data. In contrast, a model with low variance is more robust and generalizes better to new data.

## Estimation

In practice, EPE cannot be directly computed because the true input-output distribution is unknown. Instead, it is estimated using a test set, which is a subset of the data that is not used for training the model. The test set is used to evaluate the performance of the model and to estimate the generalization error.

The empirical EPE of a model on a test set is defined as:

$$\hat{EPE} = \frac{1}{n}\sum_{i=1}^n(y_i - \hat{f}(x_i))^2$$

where $n$ is the size of the test set, $(x_i, y_i)$ are the input-output pairs, and $\hat{f}(x_i)$ is the predicted output of the model.

## Conclusion

Expected Prediction Error is a fundamental concept in machine learning that measures the expected difference between the predicted output of a model and the actual output. It is used to evaluate the performance of machine learning models and to estimate the generalization error. EPE can be decomposed into bias and variance, which are two important factors that affect the performance of a model. In practice, EPE is estimated using a test set, which is a subset of the data that is not used for training the model.
